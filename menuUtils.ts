import { Course, MenuItem } from '../types';

// Module-level snapshot used by summary helpers; React state remains the source of UI updates.
export let currentMenuSnapshot: MenuItem[] = [];
export const setMenuSnapshot = (items: MenuItem[]): void => { currentMenuSnapshot = items; };

export const COURSES: Course[] = ['Starter', 'Main', 'Dessert'];

export type CourseSummary = { course: Course; itemCount: number; averagePrice: number };

export function getCourseSummaries(items: MenuItem[]): CourseSummary[] {
  const summaries: CourseSummary[] = [];
  // for loop: calculate count and total for each predefined course.
  for (let c = 0; c < COURSES.length; c += 1) {
    const selectedCourse = COURSES[c];
    let total = 0;
    let count = 0;
    for (let i = 0; i < items.length; i += 1) {
      if (items[i].course === selectedCourse) {
        total += items[i].price;
        count += 1;
      }
    }
    summaries.push({
      course: selectedCourse,
      itemCount: count,
      averagePrice: count === 0 ? 0 : total / count,
    });
  }
  return summaries;
}

export function filterMenuByCourse(items: MenuItem[], course: string): MenuItem[] {
  if (course === 'All') return items;
  return items.filter((item) => item.course === course);
}

// while loop: build a human-readable summary without assuming a fixed menu length.
export function describeMenu(items: MenuItem[]): string {
  let index = 0;
  const names: string[] = [];
  while (index < items.length) {
    names.push(items[index].dishName);
    index += 1;
  }
  return names.length ? names.join(', ') : 'No menu items have been added yet.';
}
