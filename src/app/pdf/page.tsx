// app/pdf/page.tsx
import { notFound } from "next/navigation";
import PdfLayout from "./layout";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const PdfHomePage: NextPageWithLayout = () => {
  notFound(); // Cela redirige vers une page 404
};
PdfHomePage.getLayout = function getLayout(page: any) {
  return <PdfLayout>{page}</PdfLayout>;
};

export default PdfHomePage;
