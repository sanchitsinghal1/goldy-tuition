import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { notifyDemoClassEnquiry } from "@/lib/notification";

interface ContactFormData {
  parentName: string;
  studentName: string;
  studentClass: string;
  area: string;
  phone: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.parentName || !data.studentName || !data.studentClass || !data.area || !data.phone) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    // Validate phone number format (Indian numbers)
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = data.phone.replace(/\D/g, "");
    if (cleanPhone.length !== 10 || !phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { error: "Please enter a valid 10-digit Indian phone number" },
        { status: 400 }
      );
    }

    // Save to database
    const contact = await db.contact.create({
      data: {
        parentName: data.parentName.trim(),
        studentName: data.studentName.trim(),
        studentClass: data.studentClass,
        area: data.area,
        phone: cleanPhone,
        message: data.message?.trim() || null,
      },
    });

    // Send SMS and Email notification
    notifyDemoClassEnquiry({
      ...data,
      phone: cleanPhone,
    }).catch(console.error);

    return NextResponse.json(
      { 
        success: true, 
        message: "Enquiry submitted successfully",
        id: contact.id 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit enquiry. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const contacts = await db.contact.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    });

    return NextResponse.json({ contacts });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json(
      { error: "Failed to fetch contacts" },
      { status: 500 }
    );
  }
}
