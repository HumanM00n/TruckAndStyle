"use client";

import PsInformations from "@/app/_components/accueil/ps-information";
import DsInfosCoupes from "@/app/_components/accueil/ds-informationsCoupes";
import TsAvisPrix from "@/app/_components/accueil/ts-AvisPrix";
import QsFaq from "../_components/accueil/qs-faq";

export default function Home() {
  return (
    <>
      <PsInformations />
      <DsInfosCoupes />
      <TsAvisPrix />
      <QsFaq />
    </>
  );
}
