import { writable } from 'svelte/store';

let initial = 'system';

if (typeof localStorage !== 'undefined') {
    initial = localStorage.getItem('theme') || 'system';
}

export const theme = writable(initial);

function updateThemeClass(value:any) {
    if (typeof document !== 'undefined') {
        const html = document.documentElement;
        html.classList.remove('theme-light', 'theme-dark');
        let applied = value;
        if (value === 'system') {
            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            applied = isDark ? 'dark' : 'light';
        }
        html.classList.add(`theme-${applied}`);
        html.dataset.theme = value;
    }
}

if (typeof window !== 'undefined') {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', () => {
        theme.update(current => {
            if (current === 'system') {
                updateThemeClass('system');
            }
            return current;
        });
    });
}

theme.subscribe((value) => {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('theme', value);
    }
    updateThemeClass(value);
});
