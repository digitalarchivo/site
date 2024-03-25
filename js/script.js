if (typeof window !== 'undefined') {
    const LS = window.localStorage.getItem('bp:theme') || ''
    const theme = LS ? JSON.parse(LS) : null
    if (!theme || theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}