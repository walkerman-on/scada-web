import { Theme } from "app/providers/ThemeProvider";

interface IColorTheme {
    
    
}

export const color = {
        [Theme.DARK] : {
            '--bg-color': '#1a1a1a',
            
            '--color-primary-200': '#d3d0d0',
            '--color-primary-400': '#787777',
            '--color-primary-500': '#3a3939',
            '--color-primary-600': '#282828',
            '--color-primary-800': '#181717',
            '--color-primary-900': '#282828',

            '--color-accent-200': '#a5ccee',
            '--color-accent-400': '#a5ccee',
            '--color-accent-600': '#77b4e9',
            '--color-accent-800': '#66adec',
        },
        [Theme.LIGHT] : {
            '--bg-color': '#f5f8fb',
            
            '--color-primary-200': '#f5f8fb',
            '--color-primary-400': '#8e989a',
            '--color-primary-500': '#d3d3d3',
            '--color-primary-600': '#e5e9e9',
            '--color-primary-800': '#dbe9ec',
            '--color-primary-900': '#edf0f1',

            '--color-accent-200': '#f1beae',
            '--color-accent-400': '#f1beae',
            '--color-accent-600': '#f57950',
            '--color-accent-800': '#ff642f',
        }
    }