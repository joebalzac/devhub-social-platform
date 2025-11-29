import { useState, useEffect } from "react";
import { fetchProjectData, PROJECT_IDS } from "../utils/mockApi";
import type { ProjectQualityMetric } from "../types";

/**
 * PART 1B: Implement the useProjectAnalytics hook
 *
 * Requirements:
 * 1. Fetch ProjectData for each project id in PROJECT_IDS
 * 2. Calculate the average quality score for each project
 * 3. Compute the Pseudo Deflect Rate (pdr) - average of scores <= 2
 * 4. Transform ProjectData to ProjectQualityMetric[]
 * 5. Return: { projects, loading, error }
 *
 * Example: scores [1,2,3,4,5] → average: 3.0, pdr: 1.5
 */
export const useProjectAnalytics = () => {
  // TODO: Add state for projects, loading, error

  // TODO: Fetch data using useEffect
  // - Use Promise.all() to fetch all PROJECT_IDS
  // - Calculate average and pdr for each project
  // - Transform to ProjectQualityMetric[]

  return {
    projects: [],
    loading: false,
    error: null,
  };
};

