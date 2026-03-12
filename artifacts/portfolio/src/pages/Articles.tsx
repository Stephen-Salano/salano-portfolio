export default function Articles() {
  return (
    <>
      <div className="page-title-block">
        <div className="page-label">// articles</div>
        <h1 className="page-title">System design &amp; technical writing.</h1>
      </div>

      <div className="articles-placeholder">
        <div className="comment">/* Currently writing */</div>
        <p>
          First post in progress. Architecture notes from the Psyllabus platform — multi-tenancy,
          JWT filter chains, and service layer design.
        </p>
        <div className="check-back">Check back soon.</div>
      </div>
    </>
  );
}
