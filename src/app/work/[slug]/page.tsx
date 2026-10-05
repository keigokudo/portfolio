import { Container } from "@krnjs/react-ui";

type WorkDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;

  return (
    <Container>
      <article className="work-detail">
        <p>Work detail</p>
        <h1>Project placeholder</h1>
        <p>
          Development slug: <code>{slug}</code>
        </p>
      </article>
    </Container>
  );
}
