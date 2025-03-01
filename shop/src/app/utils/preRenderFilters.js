

export const preRenderFilters = (searchValue, items, activeFilters) => {

    const filtered = items.filter((obj) => {
        const categoryMatch = activeFilters.category.length === 0 || activeFilters.category.includes(obj.category);
        const seriesMatch = activeFilters.series.length === 0 || activeFilters.series.includes(obj.series);
        const compartmentsMatch = activeFilters.compartments.length === 0 || activeFilters.compartments.includes(Number(obj.compartments));
        const searchMatch = obj.name.toLowerCase().includes(searchValue.toLowerCase());
        const colorMatch = activeFilters.colours.length === 0 || activeFilters.colours.includes(obj.color);
        const genderMatch = activeFilters.gender.length === 0 || activeFilters.gender.includes(obj.gender);
        const matchesStructure = activeFilters.structures.length === 0 || activeFilters.structures.includes(obj.structures);
        return categoryMatch && seriesMatch && compartmentsMatch && searchMatch && colorMatch && genderMatch && matchesStructure;
    });
    return filtered;
}

export const preRenderFiltersHomePage = (searchValue, items, activeFilters) => {

    const filtered = items.filter((obj) => {
        const colorMatch = activeFilters.colours.length === 0 || activeFilters.colours.includes(obj.color);
        const genderMatch = activeFilters.gender.length === 0 || activeFilters.gender.includes(obj.gender);
        const searchMatch = obj.name.toLowerCase().includes(searchValue.toLowerCase());
        const categoryMatch = activeFilters.category.length === 0 || activeFilters.category.includes(obj.chapter);
        return colorMatch && genderMatch && searchMatch && categoryMatch;
    });
    return filtered;
}



