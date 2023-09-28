export default function Section({ children, noPadding }) {
  return <section className={`bg-bgSection dark:bg-black mt-20 pb-10 ${noPadding ? '' : 'py-5'}`}>{children}</section>;
}
