"use client"

import { useTheme } from "../context/ThemeContext"
import {Sun,Moon} from 'lucide-react';

export default function ThemeToggle(){
    const {theme,toggleTheme}=useTheme();
    return(
        <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 transition-colors duration-200"
        aria-label={theme==='dark'?'switch to light mode':'switch to dark mode'}>
            {theme==='dark'?(
                <Sun className="h-5 w-5"/>
            ):(
                <Moon className="h-5 w-5"/>
            )}
        </button>
    )
}