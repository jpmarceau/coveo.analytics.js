import {OmniboxSuggestionsMetadata} from "../searchPage/searchPageEvents";
import {formatArrayForCoveoCustomData} from "./format-array-for-coveo-custom-data";

export function formatOmniboxMetaData(meta: OmniboxSuggestionsMetadata) {
    const partialQueries = (typeof  meta.partialQueries === "string") ? meta.partialQueries :  formatArrayForCoveoCustomData(meta.partialQueries);
    const suggestions = (typeof  meta.suggestions === "string") ? meta.partialQueries :  formatArrayForCoveoCustomData(meta.suggestions);

    return {
        ...meta,
        partialQueries,
        suggestions
    }
}