import connectDB from "@/lib/db";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectDB();

    const data = await request.json();

    console.log(data);

    if (!data) {
      return NextResponse.json(
        {
          success: false,
          message: "Data is required",
        },
        { status: 400 },
      );
    }

    const user = await User.create({
      userName: data.userName,
      email: data.email,
      password: data.password,
    });

    return NextResponse.json({
      success: true,
      message: "Account Created Successfully!",
      user,
    });
  } catch (error) {
    console.error("Register Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 },
    );
  }
}
