"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-[#fdf2f8] pt-24 pb-12 border-t border-[#fbcfe8]">
      <div className="container-page">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link
              href="/"
              className="font-serif text-3xl text-[#500724] tracking-tighter"
            >
              Mahnoor Store
            </Link>
            <p className="text-[#831843] leading-relaxed text-sm">
              Curating daily rituals with intention and quiet luxury. Every
              piece is chosen to elevate your sanctuary.
            </p>
            <div className="text-[#831843] text-sm space-y-2">
              <p><strong>Name:</strong> Mahnoor Tabasam</p>
              <p><strong>Phone:</strong> +923003727228</p>
              <p><strong>Email:</strong> mahnoor tabasam1994@gmail.com</p>
              <p><strong>Address:</strong> CBH-15, street no. 5 pathan colony Hyderabad.</p>
            </div>
            <div className="flex gap-4">
              {/* Mock Social Icons */}
              {["IG", "FB", "YT", "PIN"].map((social) => (
                <div
                  key={social}
                  className="w-8 h-8 rounded-full border border-[#fbcfe8] flex items-center justify-center text-[10px] text-[#db2777] cursor-pointer hover:bg-[#db2777] hover:text-white transition-colors"
                >
                  {social}
                </div>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-bold text-[#500724] mb-6 uppercase text-xs tracking-widest">
              Shop
            </h4>
            <ul className="space-y-4 text-sm text-[#831843]">
              <li>
                <Link
                  href="/shop"
                  className="hover:text-[#db2777] transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=beauty-self-care"
                  className="hover:text-[#db2777] transition-colors"
                >
                  Beauty & Self Care
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=home-kitchen"
                  className="hover:text-[#db2777] transition-colors"
                >
                  Home & Kitchen
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=office-products"
                  className="hover:text-[#db2777] transition-colors"
                >
                  Office Products
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="hover:text-[#db2777] transition-colors"
                >
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold text-[#500724] mb-6 uppercase text-xs tracking-widest">
              Support
            </h4>
            <ul className="space-y-4 text-sm text-[#831843]">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#db2777] transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#db2777] transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#db2777] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#db2777] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#db2777] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-[#500724] mb-6 uppercase text-xs tracking-widest">
              Stay Connected
            </h4>
            <p className="text-[#831843] text-sm mb-4">
              Join our newsletter for exclusive drops and guided rituals.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-white border border-[#fbcfe8] text-[#500724] focus:outline-none focus:border-[#db2777] text-sm"
              />
              <button className="w-full py-3 bg-[#500724] text-white rounded-lg text-sm font-bold uppercase tracking-wide hover:bg-[#be185d] transition-colors shadow-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#fbcfe8] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#9d174d] text-xs">
            © {new Date().getFullYear()} Mahnoor Store. All rights reserved.
          </p>
          <div className="flex gap-6 text-[#9d174d] text-xs uppercase tracking-wide">
            <span>Made with care</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
