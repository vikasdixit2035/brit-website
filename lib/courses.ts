export interface CourseRecord {
  _id?: string;
  slug: string;
  topBadge: string;
  bottomLeftBadge: string;
  isPopular: boolean;
  title: string;
  desc: string;
  price: number;
  currency?: string;
  duration: string;
  projects: string;
  gradient: string;
  iconName: string;
  order: number;
}

function getCoursesApiUrl(path = "/api/courses") {
  return process.env.NODE_ENV === "development"
    ? `http://localhost:4000${path}`
    : `https://api.britinstitute.uk${path}`;
}

export async function fetchCourses(): Promise<CourseRecord[]> {
  try {
    const res = await fetch(getCoursesApiUrl(), {
      cache: "no-store",
      next: { tags: ["courses"] },
    });

    if (!res.ok) {
      return [];
    }

    const json = await res.json();
    return json.data ?? [];
  } catch (error) {
    console.error("Failed to fetch courses:", error);
    return [];
  }
}

export async function fetchCourseBySlug(slug: string): Promise<CourseRecord | null> {
  try {
    const res = await fetch(getCoursesApiUrl(`/api/courses/${slug}`), {
      cache: "no-store",
      next: { tags: ["courses"] },
    });

    if (!res.ok) {
      return null;
    }

    const json = await res.json();
    return json.data ?? null;
  } catch (error) {
    console.error(`Failed to fetch course "${slug}":`, error);
    return null;
  }
}
