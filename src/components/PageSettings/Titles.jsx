import PageTitle from 'components/PageSettings/PageTitle';
import SubTitle from 'components/PageSettings/SubTitle';

export default function Titles({ title, subTitle }) {
  return (
    <>
      <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row justify-between items-baseline mb-10">
        <PageTitle title={title} />
        <SubTitle subTitle={subTitle} />
      </div>
    </>
  );
}
