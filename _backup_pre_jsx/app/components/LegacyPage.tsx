import LegacyRuntime from "./LegacyRuntime";

type LegacyPageProps = {
  bodyClassName?: string;
  markup: string;
};

export default function LegacyPage({ bodyClassName, markup }: LegacyPageProps) {
  return (
    <>
      <main suppressHydrationWarning dangerouslySetInnerHTML={{ __html: markup }} />
      <LegacyRuntime bodyClassName={bodyClassName} />
      <noscript>
        <div className="migration-noscript">JavaScript je potreban za animacije na sajtu.</div>
      </noscript>
    </>
  );
}
