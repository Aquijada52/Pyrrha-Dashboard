import React from "react";
import { Link } from "react-router-dom";
import FirefighterGauge from "../FirefighterGauge";

function FirefighterGaugeSet({
  firefighterId,
  firefighterCode,
  firefighterFirst,
  firefighterLast,
  firefighterEmail,
  deviceId,
  timestampMins,
  temperature,
  humidity,
  carbonMonoxide,
  nitrogenDioxide,
  increment,
}) {
  return (
    <div class="bx--col-lg-8 bx--col-md-4 bx--col-sm-2">
      <div className="bx--grid bx--grid--full-width dashboard-content">
        <div className="bx--row dashboard-tile">
          <div className="bx--col-md-8 label-firefighter">
            <Link to={"/details/" + firefighterId} className="bx--link">
              {firefighterCode} - {firefighterFirst} {firefighterLast}
              <br />
              {increment}
            </Link>
          </div>
        </div>
        <div className="bx--row dashboard-tile">
          <div className="bx--col bx--col-md-2">
            <div>
              <FirefighterGauge
                firefighterId={firefighterId}
                type={"CO"}
                value={carbonMonoxide}
                unit={"ppm"}
                limit={0.8}
              />
            </div>
            <div className="label-legend">CO</div>
          </div>
          <div className="bx--col bx--col-md-2">
            <div>
              <FirefighterGauge
                firefighterId={firefighterId}
                type={"NO2"}
                value={nitrogenDioxide}
                unit={"ppm"}
                limit={0.5}
              />
            </div>
            <div className="label-legend">
              NO<sub>2</sub>
            </div>
          </div>
          <div className="bx--col bx--col-md-2">
            <div>
              <FirefighterGauge
                firefighterId={firefighterId}
                type={"Tmp"}
                value={temperature}
                unit={"°C"}
                limit={0.3}
              />
            </div>
            <div className="label-legend">Temperature</div>
          </div>
          <div className="bx--col bx--col-md-2">
            <div>
              <FirefighterGauge
                firefighterId={firefighterId}
                type={"Hum"}
                value={humidity}
                unit={"%"}
                limit={0.9}
              />
            </div>
            <div className="label-legend">Humidity</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirefighterGaugeSet;
