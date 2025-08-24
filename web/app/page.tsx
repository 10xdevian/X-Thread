import { Button } from "@/components/ui/button";
import React from "react";
import { prisma } from "@shared/db";

function page() {
  return (
    <div>
      <Button variant="destructive">Click me </Button>
    </div>
  );
}

export default page;
