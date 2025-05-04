// Assuming 'allRoutes' is loaded from your data source
// Assuming 'selectedCityName' is "Malaga" (corrected) or another city
// Assuming 'selectedDuration' is 1, 2, or 3 etc.

function getAvailableRoutes(allRoutes, selectedCityName, selectedDuration) {
  // ... potentially other logic ...

  const filteredRoutes = allRoutes.filter(route => {
    // Check if the route is generic ("Create your own") or matches the city
    const cityMatch = route.city === selectedCityName || route.isGeneric === true; // Assuming a flag like isGeneric for "Create your own"

    // Check if the route matches the selected duration or is generic
    // Ensure selectedDuration is treated as a number if route.days is a number
    const durationMatch = route.days === selectedDuration || route.isGeneric === true;

    // Ensure comparison works correctly, especially if types differ (e.g., string vs number)
    // Example: const durationMatch = parseInt(route.days, 10) === selectedDuration || route.isGeneric === true;

    return cityMatch && durationMatch;
  });

  // Add the "Create your route" option explicitly if it's handled separately
  // const createRouteOption = allRoutes.find(r => r.id === 'create-your-own');
  // if (createRouteOption && !filteredRoutes.some(r => r.id === createRouteOption.id)) {
  //   filteredRoutes.push(createRouteOption);
  // }


  return filteredRoutes;

  // ... potentially other logic ...
}