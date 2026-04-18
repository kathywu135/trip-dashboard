const tripData = window.tripData;

const el = (selector) => document.querySelector(selector);

function googleMapsUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function renderWeatherCards() {
  return tripData.weatherLinks
    .map(
      (item) => `
        <a class="weather-card weather-card-fallback" href="${item.url}" target="_blank" rel="noreferrer">
          <div class="weather-card-copy">
            <strong>${item.city}</strong>
          </div>
          <span class="weather-card-arrow">↗</span>
        </a>
      `
    )
    .join("");
}

function getAttraction(day, attractionId) {
  return day?.attractions?.find((item) => item.id === attractionId);
}

function renderAttractionButtons(day, attractionIds) {
  if (!attractionIds?.length) {
    return "";
  }

  return `
    <div class="attraction-button-row">
      ${attractionIds
        .map((id) => getAttraction(day, id))
        .filter(Boolean)
        .map(
          (attraction) => `
            <button class="chip chip-button attraction-trigger" type="button" data-day="${day.day}" data-attraction-id="${attraction.id}">
              ${attraction.name}
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function renderDining(day) {
  if (!day.dining?.length) {
    return "";
  }

  return `
    <section class="dining-section">
      <div class="section-title-row compact-title-row">
        <h3>餐廳口袋名單</h3>
      </div>
      <div class="dining-groups">
        ${day.dining
          .map(
            (group) => `
              <article class="dining-card">
                <p class="dining-area">${group.area}</p>
                <div class="dining-list">
                  ${group.items
                    .map(
                      (item) => `
                        <div class="dining-item">
                          <div class="dining-copy">
                            <span class="dining-type">${item.type}</span>
                            <strong>${item.name}</strong>
                            <p>${item.note}</p>
                          </div>
                          <a class="map-button" href="${googleMapsUrl(item.mapsQuery)}" target="_blank" rel="noreferrer">地圖</a>
                        </div>
                      `
                    )
                    .join("")}
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderRainPlan(day) {
  if (!day.rainPlan) {
    return "";
  }

  return `
    <section class="rain-plan">
      <div class="section-title-row compact-title-row">
        <h3>雨天備案</h3>
      </div>
      <div class="rain-plan-card">
        <p class="day-summary">${day.rainPlan.summary}</p>
        <div class="rain-plan-list">
          ${day.rainPlan.items.map((item) => `<div class="rain-plan-item">${item}</div>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderBackupDays() {
  el("#backup-days").innerHTML = `
    <section class="stack-card">
      <div class="section-title-row">
        <h2>備案日模組</h2>
        <span class="pill">半日替代方案</span>
      </div>
      <div class="backup-day-list">
        ${tripData.backupDays
          .map(
            (plan) => `
              <details class="backup-day-card">
                <summary>
                  <div class="backup-day-heading">
                    <div>
                      <p class="day-kicker">${plan.title}</p>
                      <p class="day-summary">${plan.summary}</p>
                    </div>
                    <span class="pill">彈性值 ${plan.score}</span>
                  </div>
                </summary>
                <div class="backup-day-body">
                  <div class="chip-row">
                    ${plan.highlights.map((item) => `<span class="chip">${item}</span>`).join("")}
                  </div>
                  ${
                    plan.routeOptions
                      ? `<section class="rain-plan">
                          <div class="section-title-row compact-title-row">
                            <h3>交通策略</h3>
                          </div>
                          <div class="rain-plan-card">
                            <div class="rain-plan-list">
                              ${plan.routeOptions
                                .map(
                                  (item) => `
                                    <div class="rain-plan-item">
                                      <strong>${item.title}</strong>
                                      ：${item.note}
                                    </div>
                                  `
                                )
                                .join("")}
                            </div>
                          </div>
                        </section>`
                      : ""
                  }
                  <div class="timeline-list">
                    ${plan.timeline
                      .map(
                        (item) => `
                          <article class="timeline-item">
                            <div class="timeline-time">${item.time}</div>
                            <div class="timeline-copy">
                              <strong>${item.activity}</strong>
                              <p>${item.transport}${item.note ? `｜${item.note}` : ""}</p>
                            </div>
                          </article>
                        `
                      )
                      .join("")}
                  </div>
                  <section class="dining-section">
                    <div class="section-title-row compact-title-row">
                      <h3>午晚餐建議</h3>
                    </div>
                    <div class="dining-groups">
                      <article class="dining-card">
                        <div class="dining-list">
                          ${plan.dining
                            .map(
                              (item) => `
                                <div class="dining-item">
                                  <div class="dining-copy">
                                    <span class="dining-type">${item.type}</span>
                                    <strong>${item.name}</strong>
                                    <p>${item.note}</p>
                                  </div>
                                  <a class="map-button" href="${googleMapsUrl(item.mapsQuery)}" target="_blank" rel="noreferrer">地圖</a>
                                </div>
                              `
                            )
                            .join("")}
                        </div>
                      </article>
                    </div>
                  </section>
                  ${
                    plan.metrics
                      ? `<section class="dining-section">
                          <div class="section-title-row compact-title-row">
                            <h3>行程強度</h3>
                          </div>
                          <div class="metric-grid">
                            ${plan.metrics
                              .map(
                                (item) => `
                                  <div class="metric-card">
                                    <span class="metric-label">${item.label}</span>
                                    <strong>${item.value}</strong>
                                  </div>
                                `
                              )
                              .join("")}
                          </div>
                        </section>`
                      : ""
                  }
                  <section class="rain-plan">
                    <div class="section-title-row compact-title-row">
                      <h3>適合什麼情況</h3>
                    </div>
                    <div class="rain-plan-card">
                      <div class="rain-plan-list">
                        ${plan.fit.map((item) => `<div class="rain-plan-item">${item}</div>`).join("")}
                      </div>
                    </div>
                  </section>
                </div>
              </details>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function openAttractionModal(dayNumber, attractionId) {
  const day = tripData.itinerary.find((item) => item.day === Number(dayNumber));
  const attraction = getAttraction(day, attractionId);
  const root = el("#attraction-modal-root");

  if (!day || !attraction || !root) {
    return;
  }

  root.innerHTML = `
    <div class="attraction-modal-backdrop" data-close-modal="true">
      <section class="attraction-modal" role="dialog" aria-modal="true" aria-label="${attraction.name}">
        <div class="section-title-row">
          <h2>${attraction.name}</h2>
          <button class="modal-close" type="button" data-close-modal="true">關閉</button>
        </div>
        <p class="day-kicker">Day ${day.day}</p>
        <p class="day-summary">${attraction.intro}</p>
        <div class="modal-block">
          <strong>看點</strong>
          <div class="chip-row">
            ${attraction.highlights.map((item) => `<span class="chip">${item}</span>`).join("")}
          </div>
        </div>
        <div class="modal-block">
          <strong>補充</strong>
          <p class="day-summary">${attraction.access}</p>
        </div>
        <div class="link-list">
          <a href="${googleMapsUrl(attraction.mapsQuery)}" target="_blank" rel="noreferrer">開啟 Google Maps</a>
          <a href="${attraction.source.url}" target="_blank" rel="noreferrer">查看來源：${attraction.source.label}</a>
        </div>
      </section>
    </div>
  `;
}

function attachAttractionEvents() {
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(".attraction-trigger");
    if (trigger) {
      openAttractionModal(trigger.dataset.day, trigger.dataset.attractionId);
      return;
    }

    if (event.target.closest("[data-close-modal='true']")) {
      const root = el("#attraction-modal-root");
      if (root) {
        root.innerHTML = "";
      }
    }
  });
}

function formatDateLabel(date) {
  const target = new Date(`${date}T00:00:00+08:00`);
  return new Intl.DateTimeFormat("zh-TW", {
    month: "numeric",
    day: "numeric",
    weekday: "short"
  }).format(target);
}

function calculateCountdown(date) {
  const now = new Date();
  const target = new Date(`${date}T00:00:00+08:00`);
  const diff = target.getTime() - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function renderHero() {
  const countdown = calculateCountdown(tripData.flights.segments[0].date);
  el("#hero").innerHTML = `
    <div class="hero-copy">
      <p class="eyebrow">${tripData.meta.subtitle}</p>
      <h1>${tripData.meta.title}</h1>
      <p class="hero-meta">${tripData.meta.dateRange}</p>
      <p class="hero-meta">${tripData.meta.destinations.join(" / ")}</p>
    </div>
    <div class="countdown-card">
      <span class="countdown-label">距離出發</span>
      <strong>${countdown}</strong>
      <span class="countdown-unit">天</span>
    </div>
  `;
}

function renderItinerary() {
  el("#itinerary").innerHTML = `
    <section class="stack-card">
      <div class="section-title-row">
        <h2>每日行程</h2>
        <span class="pill">${tripData.itinerary.length} Days</span>
      </div>
      <div class="itinerary-list">
        ${tripData.itinerary
          .map(
            (day) => `
              <details class="day-card" data-day="${day.day}" ${day.day === 1 ? "open" : ""}>
                <summary>
                  <div class="day-card-heading">
                    <div>
                      <p class="day-kicker">Day ${day.day} ｜ ${formatDateLabel(day.date)}</p>
                      <h3>${day.title}</h3>
                      <p class="route">${day.area}</p>
                    </div>
                    <span class="pill">${day.theme}</span>
                  </div>
                </summary>
                <div class="day-card-body">
                  <p class="day-summary">${day.summary}</p>
                  <div class="chip-row">
                    ${day.highlights.map((item) => `<span class="chip">${item}</span>`).join("")}
                  </div>
                  ${
                    day.stay
                      ? `<div class="stay-note">
                          <strong>住宿</strong>
                          <span>${day.stay.name}</span>
                          <span>${day.stay.note}</span>
                          ${
                            day.stay.mapsQuery
                              ? `<a class="map-button" href="${googleMapsUrl(day.stay.mapsQuery)}" target="_blank" rel="noreferrer">Google Maps</a>`
                              : ""
                          }
                        </div>`
                      : ""
                  }
                  ${renderRainPlan(day)}
                  ${renderDining(day)}
                  <div class="timeline-list">
                    ${day.timeline
                      .map(
                        (item) => `
                          <article class="timeline-item">
                            <div class="timeline-time">${item.time}</div>
                            <div class="timeline-copy">
                              <strong>${item.title}</strong>
                              <p>${item.note}</p>
                              ${renderAttractionButtons(day, item.attractionIds)}
                              ${
                                item.mapsQuery
                                  ? `<a class="map-button" href="${googleMapsUrl(item.mapsQuery)}" target="_blank" rel="noreferrer">地圖</a>`
                                  : ""
                              }
                            </div>
                          </article>
                        `
                      )
                      .join("")}
                  </div>
                  ${
                    day.links
                      ? `<div class="link-list">
                          ${day.links
                            .map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`)
                            .join("")}
                        </div>`
                      : ""
                  }
                </div>
              </details>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderLodging() {
  el("#lodging").innerHTML = `
    <section class="stack-card">
      <div class="section-title-row">
        <h2>住宿資訊</h2>
        <span class="pill">${tripData.lodging.length} stays</span>
      </div>
      <div class="card-grid">
        ${tripData.lodging
          .map(
            (stay) => `
              <article class="info-card lodging-card">
                <div class="card-topline">${stay.city}</div>
                <h3>${stay.name}</h3>
                <p class="route">${stay.nights}</p>
                <p class="lodging-note">${stay.note}</p>
                <div class="lodging-meta">
                  <span>郵遞區號：${stay.postalCode}</span>
                  <span>電話：${stay.phone}</span>
                  <span>${stay.address}</span>
                </div>
                <a class="map-button" href="${googleMapsUrl(stay.mapsQuery)}" target="_blank" rel="noreferrer">開啟 Google Maps</a>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderFlights() {
  el("#flights").innerHTML = `
    <div class="section-title-row">
      <h2>航班資訊</h2>
      <span class="pill">${tripData.flights.airline}</span>
    </div>
    <div class="flight-task-list">
      ${tripData.flights.tasks
        .map(
          (task) => `
            <label class="check-row ${task.done ? "done" : ""}">
              <input type="checkbox" ${task.done ? "checked" : ""} disabled>
              <span>${task.label}</span>
            </label>
          `
        )
        .join("")}
    </div>
    <div class="card-grid">
      ${tripData.flights.segments
        .map(
          (segment) => `
            <article class="info-card flight-card">
              <div class="card-topline">${segment.type}｜${formatDateLabel(segment.date)}</div>
              <h3>${segment.flightNo}</h3>
              <p class="route">${segment.route}</p>
              <div class="time-row">
                <div>
                  <span class="time-label">起飛</span>
                  <strong>${segment.departure}</strong>
                </div>
                <div>
                  <span class="time-label">抵達</span>
                  <strong>${segment.arrival}</strong>
                </div>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderChecklist() {
  el("#checklist").innerHTML = tripData.checklist
    .map(
      (group) => `
        <section class="stack-card">
          <div class="section-title-row">
            <h2>${group.title}</h2>
          </div>
          <div class="checklist-group">
            ${group.items
              .map(
                (item) => `
                  <label class="check-row ${item.done ? "done" : ""}">
                    <input type="checkbox" ${item.done ? "checked" : ""} disabled>
                    <span>${item.label}</span>
                  </label>
                `
              )
              .join("")}
          </div>
          ${
            group.links
              ? `<div class="link-list">
                  ${group.links
                    .map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`)
                    .join("")}
                </div>`
              : ""
          }
          ${group.privateNote ? `<p class="private-note">${group.privateNote}</p>` : ""}
        </section>
      `
    )
    .join("");
}

function renderTransport() {
  const { jrPass, portLiner } = tripData.transport;
  el("#transport").innerHTML = `
    <section class="stack-card">
      <div class="section-title-row">
        <h2>交通備忘</h2>
        <span class="pill ${jrPass.purchased ? "pill-active" : ""}">${jrPass.purchased ? "已購買" : "未購買"}</span>
      </div>
      <div class="info-card transport-subcard">
        <div class="card-topline">Port Liner</div>
        <p class="lead">${portLiner.duration}</p>
        <p>${portLiner.payment}</p>
        <p class="warning">${portLiner.importantNote}</p>
        <a class="primary-link" href="https://tc.tabirai.net/sightseeing/article/hyogo-kobe-airport-access/" target="_blank" rel="noreferrer">查看 Port Liner 說明</a>
      </div>
      <div class="spacer-sm"></div>
      <div class="transport-copy">
        <p class="lead">${jrPass.name}</p>
        <p>價格：${jrPass.prices.join(" / ")}</p>
        <p>兌換地點：${jrPass.pickupLocation}</p>
        <p class="warning">注意：${jrPass.importantNote}</p>
        <p>劃位方式：${jrPass.reserveMethods.join(" / ")}</p>
      </div>
      <div class="transport-note-list">
        ${tripData.transport.notes.map((note) => `<div class="transport-note-item">${note}</div>`).join("")}
      </div>
      <div class="link-list">
        <a href="${jrPass.link}" target="_blank" rel="noreferrer">查看 KKday 購買資訊</a>
        <a href="${jrPass.officialLink}" target="_blank" rel="noreferrer">查看 JR West 官方說明</a>
      </div>
    </section>
  `;
}

function renderConnectivity() {
  el("#connectivity").innerHTML = "";
}

function renderWeather() {
  el("#weather").innerHTML = `
    <section class="stack-card">
      <div class="section-title-row">
        <h2>天氣查詢</h2>
        <span class="pill">連到 tenki.jp</span>
      </div>
      <div class="weather-card-grid" id="weather-card-grid">
        ${renderWeatherCards()}
      </div>
    </section>
  `;
}

if (tripData) {
  renderHero();
  renderWeather();
  renderItinerary();
  renderBackupDays();
  renderFlights();
  renderLodging();
  renderTransport();
  attachAttractionEvents();
}
