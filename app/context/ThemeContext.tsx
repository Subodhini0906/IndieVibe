"use client"
import { createContext,useState,useEffect,useContext } from 'react';
type Theme='light' | 'dark';
interface ThemeContextType{
    theme:Theme;
    toggleTheme:()=>void;
}

const ThemeContext=createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({children}:{children: React.ReactNode}){
    const[theme,setTheme]=useState<Theme>('light');
    
    //localStorage check
    useEffect(()=>{
        const storedTheme=localStorage.getItem('theme') as Theme | null;
        if(storedTheme){
            setTheme(storedTheme);
        }else if(window.matchMedia('(prefers-color-scheme:dark)').matches){              //check user's system's preference
            setTheme('dark');
        }
    },[]);

    //update doc when theme changes
    useEffect(()=>{
        if(theme==='dark'){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('drak');
        }

        //store theme preference
        localStorage.setItem('theme',theme);
    },[theme]);
}