import StudyHub from "../../study-hub";

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <StudyHub view="detail" subjectId={id} />;
}