import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ["en", "pl", "uk", "ru"];
const defaultLocale = "en";

const getLocale = (request: NextRequest) => {
  let acceptLanguage = request.headers.get("accept-language") || "";
  let headers = { "accept-language": acceptLanguage };

  let languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
};

export const middleware = (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;

  if (pathname.match(/^\/(_next|styles|scripts|images|static)\//)) {
    return;
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }
};

export const config = {
   matcher: [
    "/((?!_next|styles|scripts|images|static).*)",
  ],
};
