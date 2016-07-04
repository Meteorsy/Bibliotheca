package com.nmc.utils;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

public class StringUtils {
    public static String getParameter(String source, int index) {
        String[] result = source.split("&");

        try {
            return URLDecoder.decode(result[index].substring(result[index].indexOf("=") + 1), "UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }

        return null;
    }
}