import React from "react";

export const TotalHours = () => {
  return (
    <div className="row footer">
      <div className="col-md-6">
        <div className="text-start">
          Total time allocated this week =<spand id="totalHours">0 </spand>hr
        </div>
      </div>
      <div className="col-md-6">
        <div className="ttl-bad text-end">
          Total time saved = <span id="totalBadHrs">0</span> hrs
        </div>
      </div>
    </div>
  );
};
