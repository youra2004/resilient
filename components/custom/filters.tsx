"use client";

import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";
import { useState } from "react";

export const allCategoryFilters = [
  "All",
  "Web development",
  "Backend development",
  "Design",
  "Finance",
  "Psychology",
] as const;

export type FilterCategoryValue = Partial<(typeof allCategoryFilters)[number]>;

export const Filters = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategoryValue[]>([
    "All",
  ]);

  const handleSelectFilter = (value: FilterCategoryValue) => {
    if (value === "All") {
      setSelectedFilter(["All"]);

      return;
    }

    if (selectedFilter.includes(value)) {
      setSelectedFilter((prev) => {
        return prev.filter((item) => item !== value).length === 0
          ? ["All"]
          : prev.filter((item) => item !== value);
      });

      return;
    }

    setSelectedFilter((prev) => [
      ...prev.filter((item) => item !== "All"),
      value,
    ]);
  };

  return (
    <Box>
      <Input placeholder="Search..." />
      <ToggleGroup
        type="multiple"
        value={selectedFilter}
        className="flex justify-center gap-4 flex-wrap"
      >
        {allCategoryFilters.map((value) => (
          <Button
            aria-label={value}
            key={value}
            onClick={() => handleSelectFilter(value)}
            variant={selectedFilter.includes(value) ? "default" : "outline"}
            className="border-none"
          >
            <Typography>{value}</Typography>
          </Button>
        ))}
      </ToggleGroup>
    </Box>
  );
};
