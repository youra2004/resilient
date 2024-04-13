"use client";

import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";
import { SetStateAction, useState } from "react";

const allFilters = [
  "All",
  "Web development",
  "Backend development",
  "Design",
  "Finance",
  "Psychology",
] as const;

type FilterValue = Partial<(typeof allFilters)[number]>;

export const Filters = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterValue[]>(["All"]);

  const handleSelectFilter = (value: FilterValue) => {
    console.log("value", value);

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
        className="flex justify-center gap-4"
      >
        {allFilters.map((value) => (
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
