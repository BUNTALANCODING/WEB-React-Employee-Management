import React from "react";
import { Blog } from "../page/Blog";
import { Contact } from "../page/Contact";
import { NoPage } from "../page/Nopage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../page/Home";

export function Depan() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="blogs" element={<Blog />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}