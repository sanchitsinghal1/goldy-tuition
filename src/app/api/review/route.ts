import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { notifyNewReview } from "@/lib/notification";

interface ReviewFormData {
  parentName: string;
  studentName: string;
  rating: number;
  review: string;
  area: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ReviewFormData = await request.json();

    // Validate required fields
    if (!data.parentName || !data.studentName || !data.rating || !data.review || !data.area) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    // Validate rating
    if (data.rating < 1 || data.rating > 5) {
      return NextResponse.json(
        { error: "Rating must be between 1 and 5" },
        { status: 400 }
      );
    }

    // Save to database
    const review = await db.review.create({
      data: {
        parentName: data.parentName.trim(),
        studentName: data.studentName.trim(),
        rating: data.rating,
        review: data.review.trim(),
        area: data.area,
      },
    });

    // Send SMS and Email notification
    notifyNewReview(data).catch(console.error);

    return NextResponse.json(
      { 
        success: true, 
        message: "Review submitted successfully",
        id: review.id 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Review submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit review. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const reviews = await db.review.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    });

    return NextResponse.json({ reviews });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}
