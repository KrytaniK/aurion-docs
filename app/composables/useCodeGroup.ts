// composables/useCodeGroup.ts
export function useCodeGroup(group: String) {
    const activeTab = useState<String | null>(`code-group-${group}`, () => null);
    const allTabs = useState<String[]>(`code-group-${group}-tabs`, () => []);

    function register(filename: String) {
        if (!allTabs.value.includes(filename))
            allTabs.value.push(filename);

        if (activeTab.value === null)
            activeTab.value = filename;
    }

    return { activeTab, allTabs, register };
}