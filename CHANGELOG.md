# Change Log – Christoffel Digital Menu

## Version 2.0.0 – Part 3 / Final PoE
- Refactored the single-screen Part 2 implementation into separate screen, component, context, type and utility files.
- Moved dish creation from Home to a dedicated Add Menu Item screen.
- Added a Manage Menu screen with confirmation before removing an item.
- Added guest course filtering for All, Starter, Main and Dessert.
- Added Home summary cards showing average price by course and item count per course.
- Kept total item count and complete menu on Home.
- Centralised menu data and add/remove functions in MenuContext.
- Added reusable MenuCard and ActionButton components.
- Added TypeScript `for` and `while` loop examples in menu utilities.
- Added input validation for required fields and positive numeric prices.
- Added README setup, feature overview and manual testing instructions.

## Version 1.0.0 – Part 2 baseline
- Added dish name, description, course and price inputs.
- Added predefined course choices.
- Added menu array in component state and Home menu list.
- Added total item count, validation and item removal.
- Added Home and Details navigation.
