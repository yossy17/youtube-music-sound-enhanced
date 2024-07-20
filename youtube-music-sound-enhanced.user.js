// ==UserScript==
// @name                Youtube Music Sound Enhanced
// @name:ja             Youtube Music Sound Enhanced
// @name:en             Youtube Music Sound Enhanced
// @name:zh-CN          Youtube Music Sound Enhanced
// @name:ko             Youtube Music Sound Enhanced
// @name:ru             Youtube Music Sound Enhanced
// @name:de             Youtube Music Sound Enhanced
// @description         YouTube Musicの音量スライダーの調整幅を変更し、logarithmic(対数)またはexponential(指数)スケーリングを使ってサウンドを強化。
// @description:ja      YouTube Musicの音量スライダーの調整幅を変更し、logarithmic(対数)またはexponential(指数)スケーリングを使ってサウンドを強化。
// @description:en      Adjust the volume slider range of YouTube Music, enhancing the sound using logarithmic or exponential scaling.
// @description:zh-CN   调整YouTube Music音量滑块的范围，使用对数或指数缩放增强声音。
// @description:ko      YouTube Music의 볼륨 슬라이더 범위를 조정하여 로그 또는 지수 스케일링을 사용하여 소리를 향상시킵니다.
// @description:ru      Измените диапазон ползунка громкости YouTube Music, улучшив звук с использованием логарифмической или экспоненциальной шкалы.
// @description:de      Passen Sie den Lautstärkereglerbereich von YouTube Music an und verbessern Sie den Klang mit logarithmischer oder exponentieller Skalierung.
// @version             1.0.7
// @author              Yos_sy17
// @match               https://music.youtube.com/*
// @namespace           http://tampermonkey.net/
// @icon                data:image/png;base64,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
// @license             MIT
// @grant               GM_registerMenuCommand
// @downloadURL         https://update.greasyfork.org/scripts/500559/youtube-music-sound-enhanced.user.js
// @updateURL           https://update.greasyfork.org/scripts/500559/youtube-music-sound-enhanced.meta.js
// ==/UserScript==

(function () {
  "use strict";

  /* -------------------------------------------------- Default -------------------------------------------------- */
  let CONFIG = {
    SCALING_TYPE:
      localStorage.getItem("YT_MUSIC_VOLUME_SCALING_TYPE") || "logarithmic", // "logarithmic"（対数）or "exponential"（指数）
    EXP_SCALE_POWER:
      parseFloat(localStorage.getItem("YT_MUSIC_VOLUME_EXP_SCALE_POWER")) || 2, // Only used for "exponential" scaling（指数スケーリングの場合のみ使用）
    SLIDER_WIDTH:
      parseInt(localStorage.getItem("YT_MUSIC_VOLUME_SLIDER_WIDTH")) || 200, // Default "200px" / Original "100px"
  };
  /* ------------------------------------------------------------------------------------------------------------- */

  // 多言語対応のための翻訳
  const TRANSLATIONS = {
    en: {
      volumeChanged: "Volume changed to",
      panelTitle: "Settings Panel",
      scalingType: "Scaling Type:",
      expScalePower: "Exponential Scale Power:",
      sliderWidth: "Slider Width (px):",
      save: "Save",
      cancel: "Cancel",
      close: "Close",
    },
    ja: {
      volumeChanged: "音量が変更されました：",
      panelTitle: "設定パネル",
      scalingType: "スケーリングタイプ：",
      expScalePower: "指数スケールパワー：",
      sliderWidth: "スライダー幅 (px)：",
      save: "保存",
      cancel: "キャンセル",
      close: "閉じる",
    },
    zh: {
      volumeChanged: "音量已更改为",
      panelTitle: "设置面板",
      scalingType: "缩放类型：",
      expScalePower: "指数缩放幂：",
      sliderWidth: "滑块宽度（像素）：",
      save: "保存",
      cancel: "取消",
      close: "关闭",
    },
    ko: {
      volumeChanged: "볼륨이 다음으로 변경되었습니다",
      panelTitle: "설정 패널",
      scalingType: "스케일링 유형:",
      expScalePower: "지수 스케일 파워:",
      sliderWidth: "슬라이더 너비 (px):",
      save: "저장",
      cancel: "취소",
      close: "닫기",
    },
    ru: {
      volumeChanged: "Громкость изменена на",
      panelTitle: "Панель настроек",
      scalingType: "Тип масштабирования:",
      expScalePower: "Степень экспоненциального масштабирования:",
      sliderWidth: "Ширина ползунка (пикс.):",
      save: "Сохранить",
      cancel: "Отмена",
      close: "Закрыть",
    },
    de: {
      volumeChanged: "Lautstärke geändert auf",
      panelTitle: "Einstellungsfeld",
      scalingType: "Skalierungstyp:",
      expScalePower: "Exponentielle Skalierungsleistung:",
      sliderWidth: "Schieberegler-Breite (px):",
      save: "Speichern",
      cancel: "Abbrechen",
      close: "Schließen",
    },
  };
  // ブラウザの言語設定を取得（デフォルトは英語）
  const lang = navigator.language.split("-")[0] || "en";

  // ボリューム調整のためのスケーリング関数
  const scaleFunctions = {
    exponential: (volume) => Math.pow(volume, 1 / CONFIG.EXP_SCALE_POWER),
    logarithmic: (volume) => {
      if (volume <= 0) return 0;
      const minp = 0,
        maxp = 1;
      const minv = Math.log(0.01),
        maxv = Math.log(1);
      const scale = (maxv - minv) / (maxp - minp);
      return Math.exp(minv + scale * (volume - minp));
    },
  };

  // スケーリング関数の逆関数
  const inverseScaleFunctions = {
    exponential: (volume) => Math.pow(volume, CONFIG.EXP_SCALE_POWER),
    logarithmic: (volume) => {
      if (volume <= 0) return 0;
      const minp = 0,
        maxp = 1;
      const minv = Math.log(0.01),
        maxv = Math.log(1);
      const scale = (maxv - minv) / (maxp - minp);
      return (Math.log(volume) - minv) / scale + minp;
    },
  };

  // 現在の設定に基づいてスケーリング関数を取得
  const getScaleVolume = () =>
    scaleFunctions[CONFIG.SCALING_TYPE] || scaleFunctions.logarithmic;
  const getInverseScaleVolume = () =>
    inverseScaleFunctions[CONFIG.SCALING_TYPE] ||
    inverseScaleFunctions.logarithmic;

  // ボリュームを更新し、通知を表示し、スライダーを更新する関数
  function updateVolume(video, newVolume) {
    if (!video) return console.error("Video element not found");
    video.volume = getScaleVolume()(Math.max(0, Math.min(1, newVolume)));
    showVolumeNotification(newVolume);
    updateSlider(newVolume);
  }

  // ボリュームスライダーの値を更新する関数
  function updateSlider(newVolume) {
    const volumeSlider = document.querySelector(
      'tp-yt-paper-slider[id="volume-slider"]'
    );
    if (volumeSlider) volumeSlider.value = Math.round(newVolume * 100);
  }

  // ボリューム変更の通知を表示する関数
  function showVolumeNotification(volume) {
    const notification = document.createElement("div");
    notification.textContent = `${TRANSLATIONS[lang].volumeChanged} ${Math.round(volume * 100)}%`;
    notification.style.cssText = `
            position: fixed; top: 20px; right: 20px; background-color: rgba(0, 0, 0, 0.7);
            color: white; padding: 10px; border-radius: 5px; z-index: 9999;
        `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
  }

  // スライダーのスタイルを追加する関数
  function addStyle() {
    const styleId = "yt-music-volume-control-style";
    let style = document.getElementById(styleId);
    if (!style) {
      style = document.createElement("style");
      style.id = styleId;
      document.head.appendChild(style);
    }
    style.textContent = `tp-yt-paper-slider[id="volume-slider"] { width: ${CONFIG.SLIDER_WIDTH}px !important; }`;
  }

  // ボリュームスライダーの動作を変更する関数
  function modifyVolumeSlider(volumeSlider) {
    const overrideEvent = (originalEvent) => (event) => {
      const video = document.querySelector("video");
      updateVolume(video, event.target.immediateValue / 100);
      if (typeof originalEvent === "function")
        originalEvent.call(volumeSlider, event);
    };
    volumeSlider.oninput = overrideEvent(volumeSlider.oninput);
    volumeSlider.onchange = overrideEvent(volumeSlider.onchange);
  }

  // ボリュームスライダーを探して変更を適用する関数
  function findAndModifyVolumeSlider() {
    const volumeSlider = document.querySelector(
      'tp-yt-paper-slider[id="volume-slider"]'
    );
    if (!volumeSlider) return false;
    modifyVolumeSlider(volumeSlider);
    return true;
  }

  // ボリュームコントロールの初期化関数
  function initVolumeControl() {
    if (findAndModifyVolumeSlider()) {
      clearInterval(initInterval);
      console.log("YouTube Music Sound Enhanced: Initialized successfully");
    }
  }

  let settingsPanel = null;

  // キーボードショートカットの設定
  function setupKeyboardShortcuts() {
    document.addEventListener("keydown", (event) => {
      const video = document.querySelector("video");
      if (!video || !event.ctrlKey || !event.altKey) return;

      const isVolumeUp = event.key === "ArrowUp";
      const isVolumeDown = event.key === "ArrowDown";
      const isToggleSettings = event.key === "ArrowLeft";

      if (isVolumeUp || isVolumeDown || isToggleSettings) {
        event.preventDefault();

        if (isToggleSettings) return toggleSettingsPanel();

        const currentVolume = getInverseScaleVolume()(video.volume);
        let newVolume;

        if (!event.shiftKey) {
          newVolume = isVolumeUp
            ? Math.min(1, currentVolume + 0.05)
            : Math.max(0, currentVolume - 0.05);
        } else {
          newVolume = isVolumeUp
            ? currentVolume > 0.51
              ? 1
              : currentVolume <= 0.49
                ? 0.5
                : 1
            : currentVolume > 0.51
              ? 0.5
              : currentVolume <= 0.49
                ? 0
                : 0;
        }

        updateVolume(video, newVolume);
      }
    });
  }

  // 設定パネルの表示/非表示を切り替える関数
  function toggleSettingsPanel() {
    settingsPanel ? closeSettingsPanel() : showSettingsPanel();
  }

  // 設定パネルを表示する関数
  function showSettingsPanel() {
    if (settingsPanel) return;

    settingsPanel = document.createElement("div");
    settingsPanel.style.cssText = `
      position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
      background-color: #282828; color: #ffffff; padding: 20px; border-radius: 10px;
      z-index: 10000; box-shadow: 0 0 20px rgba(0, 0, 0, 0.5); font-family: 'Roboto', sans-serif; width: 300px;
    `;

    // 設定パネルのHTML構造
    settingsPanel.innerHTML = `
      <h2 style="margin-top: 0; margin-bottom: 20px; font-size: 24px; text-align: center;">${TRANSLATIONS[lang].panelTitle}</h2>
      <div style="margin-bottom: 15px;">
          <label for="scaling-type" style="display: block; margin-bottom: 5px;">${TRANSLATIONS[lang].scalingType}</label>
          <select id="scaling-type" style="width: 100%; padding: 5px; background-color: #3f3f3f; color: #ffffff; border: 1px solid #5f5f5f; border-radius: 5px;">
              <option value="logarithmic"${CONFIG.SCALING_TYPE === "logarithmic" ? " selected" : ""}>対数</option>
              <option value="exponential"${CONFIG.SCALING_TYPE === "exponential" ? " selected" : ""}>指数</option>
          </select>
      </div>
      <div style="margin-bottom: 15px;">
        <label for="exp-scale-power" style="display: block; margin-bottom: 5px;">${TRANSLATIONS[lang].expScalePower}</label>
        <input type="number" id="exp-scale-power" value="${CONFIG.EXP_SCALE_POWER}"${CONFIG.SCALING_TYPE !== "exponential" ? " disabled" : ""} style="width: calc(100% - 12px); padding: 5px; background-color: #3f3f3f; color: #ffffff; border: 1px solid #5f5f5f; border-radius: 5px;">
      </div>
      <div style="margin-bottom: 20px;">
        <label for="slider-width" style="display: block; margin-bottom: 5px;">${TRANSLATIONS[lang].sliderWidth}</label>
        <input type="number" id="slider-width" value="${CONFIG.SLIDER_WIDTH}" style="width: calc(100% - 12px); padding: 5px; background-color: #3f3f3f; color: #ffffff; border: 1px solid #5f5f5f; border-radius: 5px;">
      </div>
      <div style="display: flex; justify-content: space-between;">
        <button id="save-settings" style="padding: 8px 15px; background-color: #065fd4; color: #ffffff; border: none; border-radius: 5px; cursor: pointer;">${TRANSLATIONS[lang].save}</button>
        <button id="cancel-settings" style="padding: 8px 15px; background-color: #3f3f3f; color: #ffffff; border: none; border-radius: 5px; cursor: pointer;">${TRANSLATIONS[lang].cancel}</button>
        <button id="close-settings" style="padding: 8px 15px; background-color: #3f3f3f; color: #ffffff; border: none; border-radius: 5px; cursor: pointer;">${TRANSLATIONS[lang].close}</button>
      </div>
    `;

    document.body.appendChild(settingsPanel);

    // スケーリングタイプが変更されたときの処理
    settingsPanel
      .querySelector("#scaling-type")
      .addEventListener("change", (event) => {
        settingsPanel.querySelector("#exp-scale-power").disabled =
          event.target.value !== "exponential";
      });

    // 各ボタンのイベントリスナーを設定
    settingsPanel
      .querySelector("#save-settings")
      .addEventListener("click", saveSettings);
    settingsPanel
      .querySelector("#cancel-settings")
      .addEventListener("click", closeSettingsPanel);
    settingsPanel
      .querySelector("#close-settings")
      .addEventListener("click", closeSettingsPanel);
  }

  // 設定を保存する関数
  function saveSettings() {
    CONFIG.SCALING_TYPE = settingsPanel.querySelector("#scaling-type").value;
    CONFIG.EXP_SCALE_POWER = Number(
      settingsPanel.querySelector("#exp-scale-power").value
    );
    CONFIG.SLIDER_WIDTH = Number(
      settingsPanel.querySelector("#slider-width").value
    );

    // ローカルストレージに設定を保存
    localStorage.setItem("YT_MUSIC_VOLUME_SCALING_TYPE", CONFIG.SCALING_TYPE);
    localStorage.setItem(
      "YT_MUSIC_VOLUME_EXP_SCALE_POWER",
      CONFIG.EXP_SCALE_POWER
    );
    localStorage.setItem("YT_MUSIC_VOLUME_SLIDER_WIDTH", CONFIG.SLIDER_WIDTH);

    addStyle();
    findAndModifyVolumeSlider();
    closeSettingsPanel();
  }

  // 設定パネルを閉じる関数
  function closeSettingsPanel() {
    if (settingsPanel) {
      settingsPanel.remove();
      settingsPanel = null;
    }
  }

  // ボリュームコントロールの初期化を定期的に試みる
  const initInterval = setInterval(initVolumeControl, 1000);
  setupKeyboardShortcuts();
  addStyle();

  // Tampermonkeyのメニューコマンドに設定パネルを開く機能を追加
  GM_registerMenuCommand("Open Settings", showSettingsPanel);
})();
