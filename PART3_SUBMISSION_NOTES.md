# Part 3 Implementation Notes

The final application is divided into:
- `App.tsx`: application entry point and navigation stack.
- `src/types.ts`: shared Course, MenuItem and navigation types.
- `src/context/MenuContext.tsx`: shared menu array, add validation and remove confirmation.
- `src/utils/menuUtils.ts`: predefined courses, average-price calculations, course filtering and loop demonstrations.
- `src/screens/`: Home, Add Item, Manage Menu, Guest Menu and Details screens.
- `src/components/`: reusable action button and menu card.

## Average-price calculation
For each predefined course, the utility function loops through the menu array, adds the prices for matching items and counts them. If the count is zero, the Home screen displays a dash. Otherwise, average = total price / count. This avoids division by zero and recalculates from the current array after add/remove actions.

## Array operations
Adding uses a new array (`[...previous, item]`) to preserve React state immutability. Removing uses `filter()` to create an array that excludes the selected ID. The UI updates because the state setter is called.

## Filtering
The guest page stores the selected course in local state. `filterMenuByCourse()` returns the complete array for All or only matching items for a selected course.

## Loops and functions
The `for` loop iterates through courses and menu items to calculate summaries. The `while` loop traverses the menu to build a readable list of dish names. Reusable functions keep calculations separate from screen rendering.

## Manual test evidence required
Use a real device/emulator to capture:
1. Home with zero items and empty average cards.
2. Add Item screen with a completed form before saving.
3. Home after adding sample items in all three courses.
4. Home showing average price calculations.
5. Manage Menu screen and the remove confirmation.
6. Home after removal, showing updated count and average.
7. Guest Menu filtered to Starter.
8. Guest Menu filtered to Main, Dessert and All.
9. Details screen for a selected dish.

Do not label design mock-ups as real runtime screenshots. Capture these images from Expo Go or an Android emulator after running the code.
