package com.nmc.utils;

public class StringUtils {
    public static String getParameter(String source, int index) {
        String[] result = source.split("&");

        return result[index].substring(result[index].indexOf("=") + 1);
    }
}