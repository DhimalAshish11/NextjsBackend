import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  console.log("params.id", params.id);

  return NextResponse.json({ msg: "success" }, { status: 200 });
};
