import PageTitle from 'components/PageSettings/PageTitle';
import SubTitle from 'components/PageSettings/SubTitle';

export default function Titles({ title, subTitle }) {
  return (
    <>
      <div className="flex justify-between items-baseline relative mb-10 border-b-2 border-titleLine dark:border-yellow-500">
        <PageTitle title={title} />
        <SubTitle subTitle={subTitle} />
      </div>
    </>
  );
}
