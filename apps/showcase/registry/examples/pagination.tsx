"use client";

import React from "react";
import { View } from "react-native";
import { Pagination } from "@registry/usa/components/ui/pagination";

export function PaginationPreview() {
  const [currentPage, setCurrentPage] = React.useState(3);

  return (
    <View className="flex flex-col items-center gap-4 w-full">
      <Pagination
        currentPage={currentPage}
        totalPages={10}
        totalItems={100}
        onPageChange={setCurrentPage}
      />
    </View>
  );
}
