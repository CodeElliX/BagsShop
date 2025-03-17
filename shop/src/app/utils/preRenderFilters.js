import { SortPropertyEnum } from "../redux/filterSlice";

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

    if (!activeFilters.sort || !activeFilters.sort.sortProperty) {
        return filtered;
    }

    const sorted = [...filtered].sort((a, b) => {
        switch (activeFilters.sort.sortProperty) {
            case SortPropertyEnum.TITLE_DESC:
                return a.name.localeCompare(b.name);
            case SortPropertyEnum.TITLE_ASC:
                return b.name.localeCompare(a.name);
            case SortPropertyEnum.PRICE_DESC:
                return b.price - a.price;
            case SortPropertyEnum.PRICE_ASC:
                return a.price - b.price;
            case SortPropertyEnum.DEFAULT:
            default:
                return 0;
        }
    });

    return sorted;
};



export const preRenderFiltersHomePage = (searchValue, items, activeFilters) => {

    const filtered = items.filter((obj) => {
        const colorMatch = activeFilters.colours.length === 0 || activeFilters.colours.includes(obj.color);
        const genderMatch = activeFilters.gender.length === 0 || activeFilters.gender.includes(obj.gender);
        const searchMatch = obj.name.toLowerCase().includes(searchValue.toLowerCase());
        const categoryMatch = activeFilters.category.length === 0 || activeFilters.category.includes(obj.chapter);
        return colorMatch && genderMatch && searchMatch && categoryMatch;
    });
    if (!activeFilters.sort || !activeFilters.sort.sortProperty) {
        return filtered;
    }

    const sorted = [...filtered].sort((a, b) => {
        switch (activeFilters.sort.sortProperty) {
            case SortPropertyEnum.TITLE_DESC:
                return a.name.localeCompare(b.name);
            case SortPropertyEnum.TITLE_ASC:
                return b.name.localeCompare(a.name);
            case SortPropertyEnum.PRICE_DESC:
                return b.price - a.price;
            case SortPropertyEnum.PRICE_ASC:
                return a.price - b.price;
            case SortPropertyEnum.DEFAULT:
            default:
                return 0;
        }
    });

    return sorted;
}



