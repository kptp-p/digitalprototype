const cartItems = document.querySelector("#cartItems");
const addons = document.querySelector("#addons");
const overlay = document.querySelector("#overlay");
const introSheet = document.querySelector("#introSheet");
const cartScreen = document.querySelector("#cartScreen");
const editorScreen = document.querySelector("#editorScreen");
const designScreen = document.querySelector("#designScreen");
const designExit = document.querySelector("#designExit");
const recordScreen = document.querySelector("#recordScreen");
const recordTimer = document.querySelector("#recordTimer");
const recordMain = document.querySelector("#recordMain");
const recordPlay = document.querySelector("#recordPlay");
const recordPreviewVideo = document.querySelector("#recordPreviewVideo");
const recordError = document.querySelector("#recordError");
const flipCamera = document.querySelector("#flipCamera");
const deleteRecording = document.querySelector("#deleteRecording");
const designPlay = document.querySelector("#designPlay");
const designVideoPreview = document.querySelector("#designVideoPreview");
const designCard = document.querySelector(".design-card");
const designStylePreview = document.querySelector("#designStylePreview");
const designStylePreviewText = document.querySelector(".design-style-preview-text");
const designTools = document.querySelector("#designTools");
const openDesignText = document.querySelector("#openDesignText");
const flipDesignBack = document.querySelector("#flipDesignBack");
const ecardMessage = document.querySelector("#ecardMessage");
const ecardSignature = document.querySelector("#ecardSignature");
const designColorButtons = document.querySelectorAll(".design-swatch");
const designPreviewButton = document.querySelector("#designPreviewButton");
const templateVideo = document.querySelector("#openRecorderTemplate");
const templateVideoPreview = document.querySelector("#templateVideoPreview");
const templatePhoto = document.querySelector("#openPhotoTemplate");
const recordNewTemplate = document.querySelector("#recordNewTemplate");
const templateRemove = document.querySelector("#templateRemove");
const designTemplatesViewport = document.querySelector("#designTemplatesViewport");
const holdTemplatesLeft = document.querySelector("#holdTemplatesLeft");
const holdTemplatesRight = document.querySelector("#holdTemplatesRight");
const photoPickerSheet = document.querySelector("#photoPickerSheet");
const pickFromGallery = document.querySelector("#pickFromGallery");
const takePhoto = document.querySelector("#takePhoto");
const closePhotoPicker = document.querySelector("#closePhotoPicker");
const photoGalleryScreen = document.querySelector("#photoGalleryScreen");
const photoGalleryPreview = document.querySelector("#photoGalleryPreview");
const photoGalleryGrid = document.querySelector("#photoGalleryGrid");
const photoGalleryCropWindow = document.querySelector("#photoGalleryCropWindow");
const cancelPhotoGallery = document.querySelector("#cancelPhotoGallery");
const confirmPhotoGallery = document.querySelector("#confirmPhotoGallery");
const photoFileInput = document.querySelector("#photoFileInput");
const photoCameraScreen = document.querySelector("#photoCameraScreen");
const photoCameraFrame = document.querySelector("#photoCameraFrame");
const photoCameraPreview = document.querySelector("#photoCameraPreview");
const photoCameraCaptured = document.querySelector("#photoCameraCaptured");
const photoCaptureCanvas = document.querySelector("#photoCaptureCanvas");
const photoCameraOpenState = document.querySelector("#photoCameraOpenState");
const photoCameraShotState = document.querySelector("#photoCameraShotState");
const photoCameraError = document.querySelector("#photoCameraError");
const closePhotoCamera = document.querySelector("#closePhotoCamera");
const photoCameraShutter = document.querySelector("#photoCameraShutter");
const photoCameraRetake = document.querySelector("#photoCameraRetake");
const photoCameraConfirm = document.querySelector("#photoCameraConfirm");
const photoProfileScreen = document.querySelector("#photoProfileScreen");
const photoProfileProcessingState = document.querySelector("#photoProfileProcessingState");
const photoProfileSyncState = document.querySelector("#photoProfileSyncState");
const photoProfileReadyState = document.querySelector("#photoProfileReadyState");
const photoProfilePhotoRequestCard = document.querySelector("#photoProfilePhotoRequestCard");
const photoProfilePhotoRequestTrigger = document.querySelector("#photoProfilePhotoRequestTrigger");
const photoProfileVideoRequestCard = document.querySelector("#photoProfileVideoRequestCard");
const photoProfileVideoRequestTrigger = document.querySelector("#photoProfileVideoRequestTrigger");
const photoProfileCard = document.querySelector("#photoProfileCard");
const photoProfileText = document.querySelector("#photoProfileText");
const photoProfileDelete = document.querySelector("#photoProfileDelete");
const photoProfileReplace = document.querySelector("#photoProfileReplace");
const closePhotoProfileScreenButton = document.querySelector("#closePhotoProfileScreen");
const photoReadyTemplate = document.querySelector("#photoReadyTemplate");
const photoTemplateCards = document.querySelectorAll(".photo-template-card");
const photoTemplatesViewportReady = document.querySelector("#photoTemplatesViewportReady");
const photoProfilePreviewButton = document.querySelector("#photoProfilePreviewButton");
const photoTemplateScrollAreas = [
  {
    viewport: document.querySelector("#photoTemplatesViewportProcessing"),
    left: document.querySelector("#holdPhotoTemplatesLeftProcessing"),
    right: document.querySelector("#holdPhotoTemplatesRightProcessing")
  },
  {
    viewport: document.querySelector("#photoTemplatesViewportSync"),
    left: document.querySelector("#holdPhotoTemplatesLeftSync"),
    right: document.querySelector("#holdPhotoTemplatesRightSync")
  },
  {
    viewport: photoTemplatesViewportReady,
    left: document.querySelector("#holdPhotoTemplatesLeftReady"),
    right: document.querySelector("#holdPhotoTemplatesRightReady")
  }
];
const photoEcardMessage = document.querySelector("#photoEcardMessage");
const photoEcardSignature = document.querySelector("#photoEcardSignature");
const flipPhotoCardBack = document.querySelector("#flipPhotoCardBack");
const previewScreen = document.querySelector("#previewScreen");
const closePreviewButton = document.querySelector("#closePreview");
const closePreviewBackButton = document.querySelector("#closePreviewBack");
const previewCardShell = document.querySelector("#previewCardShell");
const previewButterflies = document.querySelector("#previewButterflies");
const previewFrontVideo = document.querySelector("#previewFrontVideo");
const previewFrontPhoto = document.querySelector("#previewFrontPhoto");
const previewFrontStyle = document.querySelector("#previewFrontStyle");
const previewMediaCircle = document.querySelector("#previewMediaCircle");
const previewVideoPlayer = document.querySelector("#previewVideoPlayer");
const previewPlay = previewMediaCircle.querySelector(".preview-play");
const previewStyleCard = document.querySelector("#previewStyleCard");
const previewTextMessage = document.querySelector("#previewTextMessage");
const previewTextSignature = document.querySelector("#previewTextSignature");
const previewFlipTrigger = document.querySelector("#previewFlipTrigger");
const previewSubmitButton = document.querySelector("#previewSubmitButton");
const cardText = document.querySelector("#cardText");
const charCount = document.querySelector("#charCount");
const clearText = document.querySelector("#clearText");
const goodsTotal = document.querySelector("#goodsTotal");
const checkoutTotal = document.querySelector("#checkoutTotal");
const saveText = document.querySelector("#saveText");
const phoneShell = document.querySelector(".phone");

if (recordScreen && recordScreen.parentElement !== document.body) {
  document.body.appendChild(recordScreen);
}

if (photoPickerSheet && phoneShell && photoPickerSheet.parentElement !== phoneShell) {
  phoneShell.appendChild(photoPickerSheet);
}

const ANIMATION_MS = 260;
const CARD_TEXT_LIMIT = 400;
const RECORD_LIMIT_MS = 60000;
const RECORD_RING_LENGTH = 867.08;
const PREVIEW_LIMIT_MS = 60000;
const PREVIEW_BUTTERFLY_MS = 2200;
const TEMPLATE_HOLD_SCROLL_STEP = 8;
const PHOTO_CAMERA_OPEN_LAYOUT_SRC = "layouts/%D0%A4%D0%BE%D1%82%D0%BE%20%D0%B8%20%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B8/%D0%A1%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C%20%D1%84%D0%BE%D1%82%D0%BE/%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D0%BB%D0%B8%20%D0%BA%D0%B0%D0%BC%D0%B5%D1%80%D1%83.svg";
const PHOTO_CAMERA_SHOT_LAYOUT_SRC = "layouts/%D0%A4%D0%BE%D1%82%D0%BE%20%D0%B8%20%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B8/%D0%A1%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C%20%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D1%84%D0%BE%D1%82%D0%BA%D0%B0%D0%BB%D0%B8.svg";
const VIDEO_RECORDER_MIME_TYPES = [
  "video/webm;codecs=vp9",
  "video/webm;codecs=vp8",
  "video/webm"
];
const TEMPLATE_STYLE_CARDS_LEFT = [
  { className: "template-next", label: "Готовый стиль next", styleId: "next" }
];
const TEMPLATE_STYLE_CARDS_RIGHT = [
  { className: "template-next", label: "Готовый стиль next", styleId: "next" }
];
const QTY_MINUS_ICON = `
  <svg class="qty-icon qty-icon-minus" viewBox="92 194 12 2" aria-hidden="true">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M103.143 195.929H92.8571C92.3857 195.929 92 195.495 92 194.964C92 194.434 92.3857 194 92.8571 194H103.143C103.614 194 104 194.434 104 194.964C104 195.495 103.614 195.929 103.143 195.929Z" />
  </svg>`;
const QTY_PLUS_ICON = `
  <svg class="qty-icon qty-icon-plus" viewBox="148 189 12 12" aria-hidden="true">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M159.143 195.857H154.857V200.143C154.857 200.614 154.471 201 154 201C153.529 201 153.143 200.614 153.143 200.143V195.857H148.857C148.386 195.857 148 195.471 148 195C148 194.529 148.386 194.143 148.857 194.143H153.143V189.857C153.143 189.386 153.529 189 154 189C154.471 189 154.857 189.386 154.857 189.857V194.143H159.143C159.614 194.143 160 194.529 160 195C160 195.471 159.614 195.857 159.143 195.857Z" />
  </svg>`;

function createEmptyMediaAsset(kind) {
  return {
    kind,
    status: "empty",
    blob: null,
    url: "",
    mimeType: "",
    durationMs: 0,
    source: "camera"
  };
}

const state = {
  hasPrintedCard: false,
  hasEcard: false,
  card: null,
  text: "",
  hasEcardVideo: false,
  hasEcardPhoto: false,
  ecardPhotoSource: null,
  ecardVideoStatus: "empty",
  ecardMedia: {
    video: createEmptyMediaAsset("video"),
    photo: createEmptyMediaAsset("photo")
  },
  designMediaMode: "video",
  designColor: "#FFD2CC",
  selectedDesignStyle: null,
  isDesignTextMode: false,
  ecardText: "",
  ecardSignature: "",
  photoEcardText: "",
  photoEcardSignature: "",
  previewVariant: "video",
  isPreviewBack: false,
  isPreviewOpen: false,
  previewSource: "design",
  quantities: {
    cake: 1,
    bouquet: 1,
    printedCard: 1,
    ecard: 1
  }
};

const baseItems = [
  {
    id: "cake",
    title: "Торт в стиле ламберт с бантика...",
    sub: "Начинка: Сливочно-клубничная",
    thumb: "cake",
    oldUnitPrice: 6500,
    unitPrice: 5800
  },
  {
    id: "bouquet",
    title: "Монобукет из кустовых роз",
    sub: "",
    thumb: "bouquet",
    unitPrice: 4500
  }
];

const addonItems = [
  {
    id: "certificate",
    title: "Электронные сертификаты",
    price: "от 2500₽",
    image: "certificate",
    indicator: "arrow"
  },
  {
    id: "printed",
    title: "Печатная открытка",
    price: "0₽",
    image: "print-thumb",
    action: () => {
      state.hasPrintedCard = true;
      state.card = "printed";
      state.quantities.printedCard = Math.max(1, state.quantities.printedCard);
      render();
      openEditor();
    }
  },
  {
    id: "candles",
    title: "Серебряные свечи для торта",
    price: "450₽",
    image: "candle"
  }
];

function formatPrice(value) {
  return `${new Intl.NumberFormat("ru-RU").format(value)} ₽`;
}

function getSupportedRecorderMimeType() {
  if (typeof MediaRecorder === "undefined") return "";
  return VIDEO_RECORDER_MIME_TYPES.find((type) => MediaRecorder.isTypeSupported(type)) || "";
}

function disposeAssetUrl(asset) {
  if (asset?.url) {
    URL.revokeObjectURL(asset.url);
  }
}

function clearAsset(asset) {
  disposeAssetUrl(asset);
  return createEmptyMediaAsset(asset?.kind || "video");
}

function createDraftAsset(kind, blob, meta = {}) {
  return {
    kind,
    status: "draft",
    blob,
    url: URL.createObjectURL(blob),
    mimeType: blob.type || meta.mimeType || "",
    durationMs: meta.durationMs || 0,
    source: meta.source || "camera",
    captureWidth: meta.captureWidth || 0,
    captureHeight: meta.captureHeight || 0,
    needsIosRotationFix: Boolean(meta.needsIosRotationFix)
  };
}

function confirmDraftAsset(kind, asset) {
  disposeAssetUrl(state.ecardMedia[kind]);
  state.ecardMedia[kind] = {
    ...asset,
    status: "ready"
  };
  return state.ecardMedia[kind];
}

function stopStream(stream) {
  stream?.getTracks().forEach((track) => track.stop());
}

function detachVideoElement(video) {
  if (!video) return;
  video.pause();
  video.removeAttribute("src");
  video.srcObject = null;
  video.load();
}

function isIPhoneSafari() {
  const ua = navigator.userAgent || "";
  return /iPhone/.test(ua) && /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS/.test(ua);
}

function syncPlaybackVideoOrientation(video, meta = {}) {
  if (!video) return;
  const shouldCorrectRotation = Boolean(meta.needsIosRotationFix);
  video.classList.toggle("is-rotated-ios-video", shouldCorrectRotation);
  if (shouldCorrectRotation) {
    video.style.setProperty("transform", "rotate(-90deg) scale(1.78)", "important");
    video.style.setProperty("transform-origin", "center center", "important");
  } else {
    video.style.removeProperty("transform");
    video.style.removeProperty("transform-origin");
  }
}

function setVideoElementSource(video, url, muted = false) {
  if (!video) return;
  video.pause();
  video.srcObject = null;
  video.autoplay = false;
  video.muted = muted;
  video.controls = false;
  video.removeAttribute("autoplay");
  if (video._orientationSyncHandler) {
    video.removeEventListener("loadedmetadata", video._orientationSyncHandler);
  }
  video.classList.remove("is-rotated-ios-video");
  video.style.removeProperty("transform");
  video.style.removeProperty("transform-origin");
  if (url) {
    const meta = arguments[3] || {};
    video._orientationSyncHandler = () => syncPlaybackVideoOrientation(video, meta);
    video.addEventListener("loadedmetadata", video._orientationSyncHandler, { once: true });
    video.src = url;
    video.load();
    requestAnimationFrame(() => {
      if (video.readyState >= 1) {
        syncPlaybackVideoOrientation(video, meta);
      }
    });
    return;
  }
  video._orientationSyncHandler = null;
  video.removeAttribute("src");
  video.load();
}

function syncRuntimeVideoState() {
  const videoAsset = state.ecardMedia.video;
  state.hasEcardVideo = videoAsset.status === "ready";
  state.ecardVideoStatus = state.hasEcardVideo ? "ready" : "empty";
}

function syncRuntimePhotoState() {
  const photoAsset = state.ecardMedia.photo;
  state.hasEcardPhoto = photoAsset.status === "ready";
  state.ecardPhotoSource = state.hasEcardPhoto ? (photoAsset.source || "camera") : null;
}

function getActivePhotoAssetUrl() {
  return state.ecardMedia.photo.url || "";
}

function getGoodsTotal() {
  return baseItems.reduce((sum, item) => sum + item.unitPrice * (state.quantities[item.id] || 0), 0);
}

function getCheckoutTotal() {
  return getGoodsTotal() - 900 + 200 + 500;
}

function render() {
  cartItems.innerHTML = "";
  baseItems
    .filter((item) => (state.quantities[item.id] || 0) > 0)
    .forEach((item) => cartItems.appendChild(createCartItem(item)));

  if (state.hasPrintedCard || state.hasEcard) {
    cartItems.appendChild(createCartItem({
      id: state.card === "printed" ? "printedCard" : "ecard",
      title: state.card === "printed" ? "Печатная открытка" : "Электронная открытка",
      sub: state.card === "printed" ? (state.text || "Поздравляю с днем рождения...") : "Изменить",
      thumb: state.card === "printed" ? "print-thumb" : "ecard-thumb",
      unitPrice: 0,
      editable: true,
      editorType: state.card,
      limit: 1
    }));
  }

  if (state.hasPrintedCard && state.hasEcard && state.card === "printed") {
    cartItems.appendChild(createCartItem({
      id: "ecard",
      title: "Электронная открытка",
      sub: "Изменить",
      thumb: "ecard-thumb",
      unitPrice: 0,
      editable: true,
      editorType: "ecard",
      limit: 1
    }));
  }

  if (state.hasPrintedCard && state.hasEcard && state.card === "ecard") {
    cartItems.appendChild(createCartItem({
      id: "printedCard",
      title: "Печатная открытка",
      sub: state.text || "Поздравляю с днем рождения...",
      thumb: "print-thumb",
      unitPrice: 0,
      editable: true,
      editorType: "printed",
      limit: 1
    }));
  }

  addons.innerHTML = "";
  addonItems.forEach((item) => addons.appendChild(createAddon(item)));
  goodsTotal.textContent = formatPrice(getGoodsTotal());
  checkoutTotal.textContent = formatPrice(getCheckoutTotal());
}

function createCartItem(item) {
  const element = document.createElement("article");
  element.className = "item";
  const quantity = state.quantities[item.id] || 0;
  const oldPrice = item.oldUnitPrice ? `<del>${formatPrice(item.oldUnitPrice * quantity).replace(" ₽", "₽")}</del>` : "";
  const price = item.unitPrice === 0 ? "Бесплатно" : formatPrice(item.unitPrice * quantity).replace(" ₽", "₽");
  const sub = item.sub ? `<span>${item.sub}</span>` : "";
  const edit = item.editable ? `
    <button class="edit-link" type="button" aria-label="Изменить открытку">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 17.75 14.85 6.9a2.12 2.12 0 0 1 3 0l1.25 1.25a2.12 2.12 0 0 1 0 3L8.25 22H4z" />
        <path d="m13.75 7.75 4.25 4.25" />
        <path d="M14.5 21h6.9" />
      </svg>
    </button>` : item.sub ? `
    <span class="inline-pencil" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M4 17.75 14.85 6.9a2.12 2.12 0 0 1 3 0l1.25 1.25a2.12 2.12 0 0 1 0 3L8.25 22H4z" />
        <path d="m13.75 7.75 4.25 4.25" />
        <path d="M14.5 21h6.9" />
      </svg>
    </span>` : "";

  element.innerHTML = `
    <div class="thumb ${item.thumb}" aria-hidden="true"></div>
    <div>
      <h3 class="item-title">${item.title}</h3>
      <div class="item-sub">${sub}${edit}</div>
      <div class="qty" data-counter="${item.id}">
        <button type="button" data-delta="-1" aria-label="${quantity === 1 ? "Удалить" : "Уменьшить"}">${QTY_MINUS_ICON}</button>
        <span>${quantity}</span>
        <button type="button" data-delta="1" aria-label="Увеличить"${item.limit === 1 ? " disabled" : ""}>${QTY_PLUS_ICON}</button>
      </div>
    </div>
    <div class="price">${oldPrice}${price}</div>
  `;

  element.querySelectorAll("[data-delta]").forEach((button) => {
    button.addEventListener("click", () => changeQuantity(item.id, Number(button.dataset.delta)));
  });

  if (item.editable) {
    const openEditable = item.editorType === "ecard" ? openDesign : openEditor;
    element.querySelector(".edit-link").addEventListener("click", openEditable);
    element.querySelector(".thumb").addEventListener("click", openEditable);
  }

  return element;
}

function createAddon(item) {
  const button = document.createElement("button");
  const selected = state.hasPrintedCard && item.id === "printed";
  button.className = `addon${selected ? " selected" : ""}`;
  button.type = "button";
  button.innerHTML = `
    <div class="addon-img ${item.image}" aria-hidden="true"></div>
    <div class="addon-title">${item.title}</div>
    <div class="addon-bottom">
      <span>${item.price}</span>
      <span class="${item.indicator === "arrow" ? "addon-arrow" : "addon-check"}" aria-hidden="true"></span>
    </div>
  `;
  button.addEventListener("click", () => {
    if (item.action) item.action();
  });
  return button;
}

function changeQuantity(id, delta) {
  if (delta < 0 && (state.quantities[id] || 1) === 1) {
    removeItem(id);
    return;
  }
  state.quantities[id] = Math.max(1, (state.quantities[id] || 1) + delta);
  render();
  syncEditorQuantity();
}

function removeItem(id) {
  if (id === "card" || id === "printedCard") {
    state.hasPrintedCard = false;
    state.text = "";
    state.quantities.printedCard = 1;
    if (state.card === "printed") {
      state.card = state.hasEcard ? "ecard" : null;
    }
  } else if (id === "ecard") {
    state.hasEcard = false;
    clearEcardVideo();
    state.quantities.ecard = 1;
    if (state.card === "ecard") {
      state.card = state.hasPrintedCard ? "printed" : null;
    }
  } else {
    state.quantities[id] = 0;
  }
  render();
  syncEditorQuantity();
}

function syncEditorQuantity() {
  const editorQty = document.querySelector('.editor-actions .qty[data-counter="card"]');
  if (!editorQty) return;
  const quantity = state.quantities.printedCard;
  editorQty.querySelector("span").textContent = quantity;
  editorQty.querySelector('[data-delta="1"]').disabled = true;
}

function openSheet() {
  overlay.hidden = false;
  introSheet.hidden = false;
  requestAnimationFrame(() => {
    overlay.classList.add("is-visible");
    introSheet.classList.add("is-visible");
  });
}

function closeSheet() {
  overlay.classList.remove("is-visible");
  introSheet.classList.remove("is-visible");
  window.setTimeout(() => {
    overlay.hidden = true;
    introSheet.hidden = true;
  }, ANIMATION_MS);
}

function openEditor() {
  closeSheet();
  state.card = "printed";
  editorScreen.hidden = false;
  cardText.value = state.text;
  updateCount();
  syncEditorQuantity();
  requestAnimationFrame(() => editorScreen.classList.add("is-visible"));
  window.setTimeout(() => cardText.focus(), ANIMATION_MS);
}

function closeEditor() {
  editorScreen.classList.remove("is-visible");
  window.setTimeout(() => {
    editorScreen.hidden = true;
    render();
  }, ANIMATION_MS);
}

function openDesign() {
  closeSheet();
  hideDesignExit();
  hidePhotoPicker();
  closePhotoCameraScreen();
  closePhotoProfileScreen();
  closePreviewScreen(false);
  if (state.designMediaMode === "photo" && state.hasEcardPhoto) {
    openSavedPhotoProfileScreen();
    return;
  }
  syncDesignVideo();
  syncEcardTextFields();
  designScreen.hidden = false;
  requestAnimationFrame(() => {
    designScreen.classList.add("is-visible");
    centerTemplateCard(templateVideo, designTemplatesViewport);
  });
}

function closeDesign() {
  stopTemplateHoldScroll();
  hidePhotoPicker();
  closePhotoCameraScreen();
  closePhotoProfileScreen();
  closePreviewScreen(false);
  designScreen.classList.remove("is-visible");
  window.setTimeout(() => {
    designScreen.hidden = true;
    hideDesignExit();
  }, ANIMATION_MS);
}

function keepEcardAndCloseDesign() {
  state.hasEcard = true;
  state.card = "ecard";
  state.quantities.ecard = 1;
  state.isPreviewOpen = false;
  closeDesign();
  render();
}

function discardEcardAndCloseDesign() {
  removeItem("card");
  closeDesign();
}

function showDesignExit() {
  hidePhotoPicker();
  designExit.hidden = false;
  requestAnimationFrame(() => designExit.classList.add("is-visible"));
}

function hideDesignExit() {
  designExit.classList.remove("is-visible");
  window.setTimeout(() => {
    if (!designExit.classList.contains("is-visible")) {
      designExit.hidden = true;
    }
  }, ANIMATION_MS);
}

function updateCount() {
  const length = cardText.value.length;
  const isTooLong = length > CARD_TEXT_LIMIT;
  charCount.textContent = length;
  cardText.closest(".textarea-wrap").classList.toggle("is-invalid", isTooLong);
  cardText.closest(".textarea-wrap").classList.toggle("has-text", length > 0);
  saveText.disabled = isTooLong;
}

let recordStartedAt = 0;
let recordTick = null;
let designLoadingTick = null;
let designRetryTick = null;
let recorderMode = "idle";
let hasDraftVideo = false;
let designPreviewStartedAt = 0;
let designPreviewTick = null;
let previewPlaybackTick = null;
let previewButterflyTimer = null;
let recordPreviewStartedAt = 0;
let recordPreviewTick = null;
let templateHoldTick = null;
let templateHoldDirection = 0;
let activeTemplateHoldViewport = null;
let hasDraftPhoto = false;
let draftPhotoSource = null;
let photoProfileTick = null;
let activeMediaStream = null;
let availableVideoDevices = [];
let preferredVideoDeviceId = null;
let activeVideoCaptureSettings = {};
let activeRecorder = null;
let pendingRecordedChunks = [];
let currentRecordStartTime = 0;
let currentDraftVideoAsset = createEmptyMediaAsset("video");
let activePhotoStream = null;
let currentDraftPhotoAsset = createEmptyMediaAsset("photo");
let selectedPhotoFile = null;
let photoUploadTick = null;
let photoGalleryPointer = null;
let photoGalleryCrop = null;
let photoProfileReadySelection = "current-photo";
let photoProfileReadySelectedButton = null;
let isPhotoPickerOpenedFromProfileRequest = false;
let isRecorderOpenedFromPhotoProfile = false;

const PHOTO_SOURCE_CONFIG = {
  camera: {
    profileStageAsset: "assets/photo-profile-sync-stage.svg",
    photoAsset: "assets/photo-card-selfie.jpg"
  },
  gallery: {
    profileStageAsset: "assets/photo-profile-sync-stage.svg",
    photoAsset: ""
  }
};

function formatRecordTime(msLeft) {
  const seconds = Math.max(0, Math.ceil(msLeft / 1000));
  return `0:${String(seconds).padStart(2, "0")}`;
}

function getPhotoReadySelectionButton(selection = photoProfileReadySelection) {
  if (selection === "photo-request") {
    return photoTemplatesViewportReady?.querySelector(".template-photo");
  }
  if (selection === "video-request") {
    return photoTemplatesViewportReady?.querySelector(".template-video-action");
  }
  if (selection === "current-photo") {
    return photoReadyTemplate;
  }
  return photoProfileReadySelectedButton || photoReadyTemplate;
}

function syncPhotoProfileReadySelection(center = false) {
  if (!photoTemplatesViewportReady) return;
  const selectedButton = getPhotoReadySelectionButton();
  photoProfileReadySelectedButton = selectedButton;
  photoTemplatesViewportReady.querySelectorAll(".template-card").forEach((card) => {
    card.classList.toggle("is-selected", card === selectedButton);
  });
  const isPhotoRequestMode = photoProfileReadySelection === "photo-request";
  const isVideoRequestMode = photoProfileReadySelection === "video-request";
  photoProfileScreen.classList.toggle("is-photo-request-mode", isPhotoRequestMode);
  photoProfileScreen.classList.toggle("is-video-request-mode", isVideoRequestMode);
  photoProfilePhotoRequestCard.hidden = !isPhotoRequestMode;
  photoProfileVideoRequestCard.hidden = !isVideoRequestMode;
  photoProfileCard.hidden = photoProfileReadySelection !== "current-photo";
  photoProfileDelete.hidden = !state.hasEcardPhoto || photoProfileReadySelection !== "current-photo";
  photoProfileReplace.hidden = !state.hasEcardPhoto || photoProfileReadySelection !== "current-photo";
  if (center && selectedButton) {
    centerTemplateCard(selectedButton, photoTemplatesViewportReady);
  }
}

function setPhotoProfileReadySelection(selection, button = null, options = {}) {
  photoProfileReadySelection = selection;
  photoProfileReadySelectedButton = button || getPhotoReadySelectionButton(selection);
  syncPhotoProfileReadySelection(options.center === true);
}

function setRecorderMode(mode) {
  recorderMode = mode;
  recordScreen.classList.toggle("is-recording", mode === "recording");
  recordScreen.classList.toggle("is-recorded", mode === "recorded");
  syncFlipCameraState();
  recordPlay.hidden = mode !== "recorded";
  recordMain.setAttribute("aria-label", mode === "recorded" ? "Добавить видеокружок" : mode === "recording" ? "Остановить запись" : "Начать запись");
}

function setRecordProgress(progress) {
  const offset = RECORD_RING_LENGTH * (1 - Math.min(1, Math.max(0, progress)));
  recordScreen.style.setProperty("--record-offset", offset);
}

function setDesignPreviewProgress(progress) {
  const offset = RECORD_RING_LENGTH * (1 - Math.min(1, Math.max(0, progress)));
  document.querySelector(".media-circle").style.setProperty("--design-preview-offset", offset);
}

function syncDesignPreviewProgress() {
  const duration = designVideoPreview.duration;
  if (!Number.isFinite(duration) || duration <= 0) {
    setDesignPreviewProgress(0);
    return;
  }
  setDesignPreviewProgress(designVideoPreview.currentTime / duration);
}

function tickDesignPreviewProgress() {
  syncDesignPreviewProgress();
  if (!designVideoPreview.paused && !designVideoPreview.ended) {
    designPreviewTick = window.requestAnimationFrame(tickDesignPreviewProgress);
    return;
  }
  designPreviewTick = null;
}

function setPreviewPlaybackProgress(progress) {
  const offset = RECORD_RING_LENGTH * (1 - Math.min(1, Math.max(0, progress)));
  previewMediaCircle.style.setProperty("--preview-progress-offset", offset);
}

function syncPreviewPlaybackProgress() {
  const duration = previewVideoPlayer.duration;
  if (!Number.isFinite(duration) || duration <= 0) {
    setPreviewPlaybackProgress(0);
    return;
  }
  setPreviewPlaybackProgress(previewVideoPlayer.currentTime / duration);
}

function tickPreviewPlaybackProgress() {
  syncPreviewPlaybackProgress();
  if (!previewVideoPlayer.paused && !previewVideoPlayer.ended) {
    previewPlaybackTick = window.requestAnimationFrame(tickPreviewPlaybackProgress);
    return;
  }
  previewPlaybackTick = null;
}

function resetPreviewPlaybackProgress() {
  clearPreviewPlaybackTimer();
  previewMediaCircle.classList.remove("is-playing");
  setPreviewPlaybackProgress(0);
}

function clearRecordTimer() {
  window.clearInterval(recordTick);
  recordTick = null;
}

function clearDesignPreviewTimer() {
  window.cancelAnimationFrame(designPreviewTick);
  designPreviewTick = null;
}

function clearPreviewPlaybackTimer() {
  window.cancelAnimationFrame(previewPlaybackTick);
  previewPlaybackTick = null;
}

function stopPreviewButterflies() {
  window.clearTimeout(previewButterflyTimer);
  previewButterflyTimer = null;
  previewButterflies.classList.remove("is-active");
}

function playPreviewButterflies() {
  stopPreviewButterflies();
  window.requestAnimationFrame(() => {
    void previewButterflies.offsetWidth;
    previewButterflies.classList.add("is-active");
    previewButterflyTimer = window.setTimeout(() => {
      previewButterflies.classList.remove("is-active");
      previewButterflyTimer = null;
    }, PREVIEW_BUTTERFLY_MS);
  });
}

function clearRecordPreviewTimer() {
  window.clearInterval(recordPreviewTick);
  recordPreviewTick = null;
}

function syncFlipCameraState() {
  const canFlip = availableVideoDevices.length > 1 && recorderMode !== "recording";
  flipCamera.disabled = !canFlip;
}

function isMobileCameraDevice() {
  return window.matchMedia?.("(pointer: coarse)").matches || false;
}

function ensureCameraAvailable() {
  if (!window.isSecureContext) {
    throw new Error("insecure-context");
  }
  if (!navigator.mediaDevices?.getUserMedia) {
    throw new Error("getUserMedia-unavailable");
  }
}

function buildUserCameraConstraints(size) {
  const constraints = {
    facingMode: isMobileCameraDevice() ? { ideal: "user" } : "user"
  };
  if (size?.width) constraints.width = { ideal: size.width };
  if (size?.height) constraints.height = { ideal: size.height };
  return constraints;
}

function buildVideoConstraintAttempts(size, deviceId) {
  const attempts = [buildUserCameraConstraints(size), true];
  if (deviceId) {
    attempts.push({ deviceId: { exact: deviceId } });
  }
  return attempts;
}

function prepareLiveVideoElement(video, muted = true) {
  if (!video) return;
  video.playsInline = true;
  video.autoplay = true;
  video.muted = muted;
  video.setAttribute("playsinline", "");
  video.setAttribute("autoplay", "");
  if (muted) {
    video.setAttribute("muted", "");
  } else {
    video.removeAttribute("muted");
  }
}

function getCameraErrorMessage(error) {
  const messageByCode = {
    "insecure-context": "Откройте сайт по https, чтобы включить камеру на телефоне",
    "getUserMedia-unavailable": "Камера недоступна в этом браузере",
    "media-recorder-unavailable": "Запись видео не поддерживается в этом браузере",
    NotAllowedError: "Нет доступа к камере",
    NotFoundError: "Камера не найдена",
    NotReadableError: "Камера занята другим приложением",
    OverconstrainedError: "Не удалось открыть выбранную камеру",
    SecurityError: "Откройте сайт по https, чтобы включить камеру",
    NotSupportedError: "Камера не поддерживается на этом устройстве"
  };
  return typeof error === "string" ? error : messageByCode[error?.name || error?.message] || "Не удалось открыть камеру";
}

async function refreshVideoInputDevices() {
  if (!navigator.mediaDevices?.enumerateDevices) {
    availableVideoDevices = [];
    syncFlipCameraState();
    return;
  }
  const devices = await navigator.mediaDevices.enumerateDevices();
  availableVideoDevices = devices.filter((device) => device.kind === "videoinput");
  syncFlipCameraState();
}

async function openCameraStream(deviceId = preferredVideoDeviceId) {
  ensureCameraAvailable();
  stopStream(activeMediaStream);
  activeMediaStream = null;
  let lastError = null;
  for (const videoConstraints of buildVideoConstraintAttempts({ width: 720, height: 720 }, deviceId)) {
    try {
      activeMediaStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        },
        video: videoConstraints
      });
      break;
    } catch (error) {
      lastError = error;
    }
  }
  if (!activeMediaStream) {
    throw lastError || new Error("getUserMedia-unavailable");
  }
  const [track] = activeMediaStream.getVideoTracks();
  const settings = track?.getSettings?.() || {};
  activeVideoCaptureSettings = settings;
  preferredVideoDeviceId = settings.deviceId || deviceId || preferredVideoDeviceId;
  prepareLiveVideoElement(recordPreviewVideo, true);
  recordPreviewVideo.srcObject = activeMediaStream;
  recordScreen.classList.add("has-live-preview");
  await recordPreviewVideo.play().catch(() => {});
  await refreshVideoInputDevices();
}

async function switchCamera() {
  if (availableVideoDevices.length < 2 || recorderMode === "recording") return;
  const currentIndex = availableVideoDevices.findIndex((device) => device.deviceId === preferredVideoDeviceId);
  const nextDevice = availableVideoDevices[(currentIndex + 1 + availableVideoDevices.length) % availableVideoDevices.length];
  try {
    await openCameraStream(nextDevice?.deviceId);
  } catch (error) {
    showRecordError(error);
  }
}

function stopPhotoStream() {
  stopStream(activePhotoStream);
  activePhotoStream = null;
}

function clearDraftPhotoAsset() {
  currentDraftPhotoAsset = clearAsset(currentDraftPhotoAsset);
  hasDraftPhoto = false;
  selectedPhotoFile = null;
}

function resetDraftPhotoAsset() {
  currentDraftPhotoAsset = createEmptyMediaAsset("photo");
  hasDraftPhoto = false;
  selectedPhotoFile = null;
}

function resetPhotoUploadTick() {
  window.clearTimeout(photoUploadTick);
  photoUploadTick = null;
}

function closePhotoGalleryEditor() {
  photoGalleryGrid.hidden = true;
  photoGalleryPreview.hidden = true;
  photoGalleryPreview.removeAttribute("src");
  photoGalleryCrop = null;
}

function clampPhotoGalleryCrop(nextCrop = photoGalleryCrop) {
  if (!nextCrop) return null;
  const crop = { ...nextCrop };
  crop.width = Math.max(180, Math.min(360, crop.width));
  crop.height = Math.max(150, Math.min(447, crop.height));
  crop.x = Math.max(1, Math.min(361 - crop.width, crop.x));
  crop.y = Math.max(1, Math.min(448 - crop.height, crop.y));
  return crop;
}

function syncPhotoGalleryCropWindow() {
  if (!photoGalleryCrop) return;
  photoGalleryCropWindow.style.left = `${photoGalleryCrop.x}px`;
  photoGalleryCropWindow.style.top = `${photoGalleryCrop.y}px`;
  photoGalleryCropWindow.style.width = `${photoGalleryCrop.width}px`;
  photoGalleryCropWindow.style.height = `${photoGalleryCrop.height}px`;
}

function initializePhotoGalleryCrop() {
  photoGalleryCrop = {
    x: 1,
    y: 1,
    width: 360,
    height: 450
  };
  syncPhotoGalleryCropWindow();
}

function openPhotoGalleryEditor() {
  photoGalleryScreen.hidden = false;
  photoGalleryPreview.src = currentDraftPhotoAsset.url;
  photoGalleryPreview.hidden = false;
  photoGalleryGrid.hidden = false;
  initializePhotoGalleryCrop();
  requestAnimationFrame(() => photoGalleryScreen.classList.add("is-visible"));
}

function startPhotoGalleryPointer(event, mode) {
  if (!photoGalleryCrop) return;
  event.preventDefault();
  photoGalleryPointer = {
    id: event.pointerId,
    mode,
    startX: event.clientX,
    startY: event.clientY,
    crop: { ...photoGalleryCrop }
  };
  photoGalleryCropWindow.setPointerCapture?.(event.pointerId);
  photoGalleryCropWindow.style.cursor = mode === "move" ? "grabbing" : photoGalleryCropWindow.style.cursor;
}

function updatePhotoGalleryPointer(event) {
  if (!photoGalleryPointer || event.pointerId !== photoGalleryPointer.id) return;
  const dx = event.clientX - photoGalleryPointer.startX;
  const dy = event.clientY - photoGalleryPointer.startY;
  const nextCrop = { ...photoGalleryPointer.crop };
  if (photoGalleryPointer.mode === "move") {
    nextCrop.x += dx;
    nextCrop.y += dy;
  }
  if (photoGalleryPointer.mode === "top-left") {
    nextCrop.x += dx;
    nextCrop.y += dy;
    nextCrop.width -= dx;
    nextCrop.height -= dy;
  }
  if (photoGalleryPointer.mode === "top-right") {
    nextCrop.y += dy;
    nextCrop.width += dx;
    nextCrop.height -= dy;
  }
  if (photoGalleryPointer.mode === "bottom-left") {
    nextCrop.x += dx;
    nextCrop.width -= dx;
    nextCrop.height += dy;
  }
  if (photoGalleryPointer.mode === "bottom-right") {
    nextCrop.width += dx;
    nextCrop.height += dy;
  }
  photoGalleryCrop = clampPhotoGalleryCrop(nextCrop);
  syncPhotoGalleryCropWindow();
}

function stopPhotoGalleryPointer(event) {
  if (!photoGalleryPointer || event.pointerId !== photoGalleryPointer.id) return;
  photoGalleryCropWindow.releasePointerCapture?.(event.pointerId);
  photoGalleryPointer = null;
  photoGalleryCropWindow.style.cursor = "grab";
}

function dataURLToBlob(dataUrl) {
  const parts = dataUrl.split(",");
  if (parts.length < 2) return null;
  const mimeMatch = parts[0].match(/data:(.*?);base64/);
  const mimeType = mimeMatch?.[1] || "image/jpeg";
  const binary = atob(parts[1]);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return new Blob([bytes], { type: mimeType });
}

function createCroppedPhotoAsset() {
  if (!currentDraftPhotoAsset.url || !photoGalleryCrop) return currentDraftPhotoAsset;
  const sourceWidth = photoGalleryPreview.naturalWidth || photoGalleryPreview.width;
  const sourceHeight = photoGalleryPreview.naturalHeight || photoGalleryPreview.height;
  if (!sourceWidth || !sourceHeight) return currentDraftPhotoAsset;
  const scale = Math.max(360 / sourceWidth, 447 / sourceHeight);
  const renderedWidth = sourceWidth * scale;
  const renderedHeight = sourceHeight * scale;
  const offsetX = 8 + (360 - renderedWidth) / 2;
  const offsetY = 143 + (447 - renderedHeight) / 2;
  const cropX = Math.max(0, (photoGalleryCrop.x - offsetX) / scale);
  const cropY = Math.max(0, (photoGalleryCrop.y - offsetY) / scale);
  const cropWidth = Math.min(sourceWidth - cropX, photoGalleryCrop.width / scale);
  const cropHeight = Math.min(sourceHeight - cropY, photoGalleryCrop.height / scale);
  photoCaptureCanvas.width = Math.max(1, Math.round(cropWidth));
  photoCaptureCanvas.height = Math.max(1, Math.round(cropHeight));
  const context = photoCaptureCanvas.getContext("2d");
  if (!context) return currentDraftPhotoAsset;
  context.clearRect(0, 0, photoCaptureCanvas.width, photoCaptureCanvas.height);
  context.drawImage(
    photoGalleryPreview,
    cropX,
    cropY,
    cropWidth,
    cropHeight,
    0,
    0,
    photoCaptureCanvas.width,
    photoCaptureCanvas.height
  );
  const blob = dataURLToBlob(photoCaptureCanvas.toDataURL("image/jpeg", 0.92));
  if (!blob) return currentDraftPhotoAsset;
  const previousDraftAsset = currentDraftPhotoAsset;
  currentDraftPhotoAsset = createDraftAsset("photo", blob, {
    mimeType: "image/jpeg",
    source: "gallery"
  });
  disposeAssetUrl(previousDraftAsset);
  return currentDraftPhotoAsset;
}

function detachPhotoCameraPreview() {
  photoCameraPreview.pause();
  photoCameraPreview.srcObject = null;
}

function syncPhotoCameraLayoutAssets() {
  photoCameraOpenState?.querySelector("img")?.setAttribute("src", PHOTO_CAMERA_OPEN_LAYOUT_SRC);
  photoCameraShotState?.querySelector("img")?.setAttribute("src", PHOTO_CAMERA_SHOT_LAYOUT_SRC);
}

function resetPhotoCameraView() {
  photoCameraFrame?.classList.remove("is-shot");
  photoCameraOpenState.hidden = false;
  photoCameraShotState.hidden = true;
  photoCameraError.hidden = true;
  photoCameraError.textContent = "";
  photoCameraCaptured.hidden = true;
  photoCameraCaptured.removeAttribute("src");
  photoCameraShutter.hidden = false;
  photoCameraRetake.hidden = true;
  photoCameraConfirm.hidden = true;
}

async function openPhotoStream() {
  ensureCameraAvailable();
  stopPhotoStream();
  activePhotoStream = null;
  let lastError = null;
  for (const videoConstraints of buildVideoConstraintAttempts({ width: 1080, height: 1080 })) {
    try {
      activePhotoStream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: videoConstraints
      });
      break;
    } catch (error) {
      lastError = error;
    }
  }
  if (!activePhotoStream) {
    throw lastError || new Error("getUserMedia-unavailable");
  }
  prepareLiveVideoElement(photoCameraPreview, true);
  photoCameraPreview.srcObject = activePhotoStream;
  await photoCameraPreview.play().catch(() => {});
}

function showPhotoAssetFlow(source) {
  state.hasEcardPhoto = true;
  state.ecardMedia.photo = {
    ...currentDraftPhotoAsset,
    status: "ready",
    source
  };
  syncRuntimePhotoState();
  setDesignMediaMode("photo");
  syncDesignVideo();
  photoProfileReadySelection = "current-photo";
  photoProfileReadySelectedButton = photoReadyTemplate;
  closePhotoCameraScreen();
  closePhotoGalleryScreen();
  resetPhotoUploadTick();
  openPhotoProfileScreen();
  photoProfileTick = window.setTimeout(() => {
    showPhotoProfileState("processing");
  }, 900);
  photoUploadTick = window.setTimeout(() => {
    showPhotoProfileState("ready");
    photoProfileScreen.classList.remove("is-loading");
  }, 2200);
}

function pickPhotoFromGallery() {
  photoFileInput.click();
}

function isValidPhotoFile(file) {
  return Boolean(file && file.type && file.type.startsWith("image/"));
}

function handlePhotoFileSelection(file) {
  if (!isValidPhotoFile(file)) return;
  clearDraftPhotoAsset();
  selectedPhotoFile = file;
  currentDraftPhotoAsset = createDraftAsset("photo", file, {
    mimeType: file.type,
    source: "gallery"
  });
  hasDraftPhoto = true;
  draftPhotoSource = "gallery";
  openPhotoGalleryEditor();
}

function clearDraftVideoAsset() {
  currentDraftVideoAsset = clearAsset(currentDraftVideoAsset);
  hasDraftVideo = false;
}

function resetDraftVideoAsset() {
  currentDraftVideoAsset = createEmptyMediaAsset("video");
  hasDraftVideo = false;
}

function resetRecordSurface() {
  recordTimer.textContent = "1:00";
  setRecordProgress(0);
  recordError.hidden = true;
  recordError.textContent = "";
  stopRecordPreview(false);
  recordScreen.classList.remove("is-playing");
  recordScreen.classList.remove("has-live-preview");
}

async function ensureRecorderReady() {
  const mimeType = getSupportedRecorderMimeType();
  if (!mimeType) {
    throw new Error("media-recorder-unavailable");
  }
  if (!activeMediaStream) {
    await openCameraStream();
  }
  return mimeType;
}

function stopTemplateHoldScroll() {
  templateHoldDirection = 0;
  activeTemplateHoldViewport = null;
  if (templateHoldTick) {
    window.cancelAnimationFrame(templateHoldTick);
    templateHoldTick = null;
  }
}

function tickTemplateHoldScroll() {
  if (!templateHoldDirection || !activeTemplateHoldViewport) {
    templateHoldTick = null;
    return;
  }
  activeTemplateHoldViewport.scrollLeft += TEMPLATE_HOLD_SCROLL_STEP * templateHoldDirection;
  templateHoldTick = window.requestAnimationFrame(tickTemplateHoldScroll);
}

function startTemplateHoldScroll(viewport, direction) {
  activeTemplateHoldViewport = viewport;
  templateHoldDirection = direction;
  if (templateHoldTick) return;
  templateHoldTick = window.requestAnimationFrame(tickTemplateHoldScroll);
}

function centerTemplateCard(card, viewport = designTemplatesViewport) {
  if (!card || !viewport) return;
  const viewportWidth = viewport.clientWidth;
  const cardCenter = card.offsetLeft + (card.offsetWidth / 2);
  const targetScrollLeft = Math.max(0, cardCenter - (viewportWidth / 2));
  viewport.scrollTo({
    left: targetScrollLeft,
    behavior: "smooth"
  });
}

function createTemplateStyleCard({ className, label, styleId }, isPhotoReadyTrack) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `template-card ${className}${isPhotoReadyTrack ? " photo-template-card" : ""}`;
  button.setAttribute("aria-label", label);
  button.dataset.templateStyle = "true";
  if (styleId) {
    button.dataset.styleId = styleId;
  }
  return button;
}

function populateTemplateTrack(track) {
  if (!track || track.dataset.extended === "true") return;
  const isPhotoReadyTrack = Boolean(track.closest("#photoTemplatesViewportReady"));
  TEMPLATE_STYLE_CARDS_LEFT
    .slice()
    .reverse()
    .forEach((card) => {
      track.prepend(createTemplateStyleCard(card, isPhotoReadyTrack));
    });
  TEMPLATE_STYLE_CARDS_RIGHT.forEach((card) => {
    track.append(createTemplateStyleCard(card, isPhotoReadyTrack));
  });
  track.dataset.extended = "true";
}

function initializeTemplateViewport(viewport) {
  if (!viewport || viewport.dataset.initialized === "true") return;
  viewport.querySelectorAll(".template-card").forEach((button) => {
    button.addEventListener("click", () => {
      if (viewport === photoTemplatesViewportReady) {
        if (button === photoReadyTemplate) {
          state.selectedDesignStyle = null;
          state.designMediaMode = "photo";
          syncDesignStyle();
          syncDesignVideo();
          setPhotoProfileReadySelection("current-photo", button, { center: true });
          return;
        }
        if (button.classList.contains("template-photo")) {
          setPhotoProfileReadySelection("photo-request", button, { center: true });
          return;
        }
        if (button.classList.contains("template-video-action")) {
          state.selectedDesignStyle = null;
          syncDesignStyle();
          setDesignMediaMode("video");
          setPhotoProfileReadySelection("video-request", button, { center: true });
          return;
        }
      }
      const isStyleButton =
        button.dataset.templateStyle === "true" ||
        button.classList.contains("template-abstract") ||
        button.dataset.styleId === "gift" ||
        button.dataset.styleId === "next";
      if (isStyleButton) {
        state.selectedDesignStyle = button.dataset.styleId || "abstract";
        state.designMediaMode = "photo";
        stopDesignPreview();
      } else if (viewport === designTemplatesViewport) {
        state.selectedDesignStyle = null;
      }
      if (viewport === designTemplatesViewport || (viewport === photoTemplatesViewportReady && isStyleButton)) {
        syncDesignStyle();
        syncDesignVideo();
      }
      viewport.querySelectorAll(".template-card").forEach((card) => {
        card.classList.toggle("is-selected", card === button);
      });
      centerTemplateCard(button, viewport);
      if (viewport === photoTemplatesViewportReady) {
        photoProfileReadySelectedButton = button;
        photoProfileReadySelection = "other";
        syncPhotoProfileReadySelection(false);
      }
    });
  });
  viewport.dataset.initialized = "true";
}

function stopDesignPreview(resetProgress = true) {
  clearDesignPreviewTimer();
  const mediaCircle = document.querySelector(".media-circle");
  mediaCircle.classList.remove("is-playing");
  designVideoPreview.pause();
  designPlay.hidden = state.ecardVideoStatus !== "ready";
  if (resetProgress) setDesignPreviewProgress(0);
}

function stopRecordPreview(resetProgress = true) {
  clearRecordPreviewTimer();
  recordScreen.classList.remove("is-playing");
  if (recorderMode !== "recording") {
    recordPreviewVideo.pause();
  }
  if (recorderMode === "recorded") recordPlay.hidden = false;
  if (resetProgress && recorderMode === "recorded") setRecordProgress(1);
}

function updateRecordPreviewProgress() {
  const elapsed = Date.now() - recordPreviewStartedAt;
  setRecordProgress(elapsed / PREVIEW_LIMIT_MS);
  if (elapsed >= PREVIEW_LIMIT_MS) stopRecordPreview();
}

function startDesignPreview() {
  if (!state.ecardMedia.video.url) return;
  clearDesignPreviewTimer();
  setDesignPreviewProgress(0);
  document.querySelector(".media-circle").classList.add("is-playing");
  designPlay.hidden = true;
  designVideoPreview.currentTime = 0;
  designVideoPreview.play().catch(() => {
    stopDesignPreview();
  });
}

function startRecordPreview() {
  if (!currentDraftVideoAsset.url) return;
  clearRecordPreviewTimer();
  recordPreviewStartedAt = Date.now();
  setRecordProgress(0);
  recordScreen.classList.add("is-playing");
  recordPlay.hidden = true;
  recordPreviewVideo.currentTime = 0;
  recordPreviewVideo.play().catch(() => {
    stopRecordPreview();
  });
  recordPreviewTick = window.setInterval(updateRecordPreviewProgress, 120);
}

function togglePreviewVideoPlayback() {
  if (state.previewVariant !== "video" || !state.ecardMedia.video.url) return;
  if (previewVideoPlayer.paused) {
    clearPreviewPlaybackTimer();
    previewPlay.hidden = true;
    previewMediaCircle.classList.add("is-playing");
    previewVideoPlayer.currentTime = 0;
    previewVideoPlayer.play().catch(() => {
      resetPreviewPlaybackProgress();
      previewPlay.hidden = false;
    });
    return;
  }
  previewVideoPlayer.pause();
  previewMediaCircle.classList.remove("is-playing");
  previewPlay.hidden = false;
}

async function openRecorder() {
  stopDesignPreview();
  hidePhotoPicker();
  hideDesignExit();
  resetRecordSurface();
  setRecorderMode("idle");
  clearDraftVideoAsset();
  detachVideoElement(recordPreviewVideo);
  recordScreen.hidden = false;
  requestAnimationFrame(() => recordScreen.classList.add("is-visible"));
  try {
    await openCameraStream();
  } catch (error) {
    showRecordError(error);
  }
}

function openRecorderFromPhotoProfile() {
  isRecorderOpenedFromPhotoProfile = true;
  openRecorder();
}

function showRecordError(error) {
  recordError.textContent = getCameraErrorMessage(error);
  recordError.hidden = false;
  flipCamera.disabled = true;
}

function showPhotoCameraError(error) {
  photoCameraError.textContent = getCameraErrorMessage(error);
  photoCameraError.hidden = false;
  photoCameraShutter.hidden = true;
  photoCameraRetake.hidden = true;
  photoCameraConfirm.hidden = true;
}

function closeRecorder() {
  clearRecordTimer();
  stopRecordPreview(false);
  if (recorderMode === "recording" && activeRecorder?.state === "recording") {
    activeRecorder.stop();
  }
  stopStream(activeMediaStream);
  activeMediaStream = null;
  recordScreen.classList.remove("has-live-preview");
  recordScreen.classList.remove("is-visible");
  window.setTimeout(() => {
    recordScreen.hidden = true;
    if (isRecorderOpenedFromPhotoProfile) {
      isRecorderOpenedFromPhotoProfile = false;
      photoProfileReadySelection = "video-request";
      openSavedPhotoProfileScreen();
    }
    setRecorderMode("idle");
    detachVideoElement(recordPreviewVideo);
    resetRecordSurface();
    clearDraftVideoAsset();
  }, ANIMATION_MS);
}

async function startRecording() {
  stopRecordPreview(false);
  clearDraftVideoAsset();
  resetRecordSurface();
  try {
    const mimeType = await ensureRecorderReady();
    if (recordPreviewVideo.srcObject !== activeMediaStream) {
      prepareLiveVideoElement(recordPreviewVideo, true);
      recordPreviewVideo.srcObject = activeMediaStream;
    }
    await recordPreviewVideo.play().catch(() => {});
    pendingRecordedChunks = [];
    activeRecorder = new MediaRecorder(activeMediaStream, { mimeType });
    activeRecorder.addEventListener("dataavailable", (event) => {
      if (event.data && event.data.size > 0) {
        pendingRecordedChunks.push(event.data);
      }
    });
    activeRecorder.addEventListener("stop", () => {
      const blob = new Blob(pendingRecordedChunks, { type: mimeType });
      pendingRecordedChunks = [];
      if (!blob.size) {
        deleteDraftRecording();
        showRecordError("Не удалось сохранить запись");
        return;
      }
      currentDraftVideoAsset = createDraftAsset("video", blob, {
        durationMs: Math.max(0, Date.now() - currentRecordStartTime),
        captureWidth: Number(activeVideoCaptureSettings.width) || 0,
        captureHeight: Number(activeVideoCaptureSettings.height) || 0,
        needsIosRotationFix: isIPhoneSafari()
      });
      hasDraftVideo = true;
      setVideoElementSource(recordPreviewVideo, currentDraftVideoAsset.url, false, currentDraftVideoAsset);
      recordTimer.textContent = "0:00";
      setRecordProgress(1);
      setRecorderMode("recorded");
    }, { once: true });
    currentRecordStartTime = Date.now();
    activeRecorder.start();
  } catch (error) {
    showRecordError(error);
    return;
  }
  recordStartedAt = Date.now();
  setRecorderMode("recording");
  clearRecordTimer();
  recordTick = window.setInterval(updateRecordTimer, 120);
}

function updateRecordTimer() {
  const elapsed = Date.now() - recordStartedAt;
  const left = RECORD_LIMIT_MS - elapsed;
  recordTimer.textContent = formatRecordTime(left);
  setRecordProgress(elapsed / RECORD_LIMIT_MS);
  if (left <= 0) stopRecording();
}

function stopRecording() {
  if (recorderMode !== "recording") return;
  clearRecordTimer();
  if (activeRecorder?.state === "recording") {
    activeRecorder.stop();
  }
}

function deleteDraftRecording() {
  if (recorderMode === "recording") {
    stopRecording();
  }
  stopRecordPreview(false);
  clearDraftVideoAsset();
  detachVideoElement(recordPreviewVideo);
  if (activeMediaStream) {
    prepareLiveVideoElement(recordPreviewVideo, true);
    recordPreviewVideo.srcObject = activeMediaStream;
    recordPreviewVideo.play().catch(() => {});
  }
  resetRecordSurface();
  setRecorderMode("idle");
}

function confirmRecording() {
  if (!hasDraftVideo || !currentDraftVideoAsset.url) return;
  const shouldReturnFromPhotoProfile = isRecorderOpenedFromPhotoProfile;
  clearEcardVideo();
  confirmDraftAsset("video", currentDraftVideoAsset);
  if (shouldReturnFromPhotoProfile) {
    disposeAssetUrl(state.ecardMedia.photo);
    state.ecardMedia.photo = createEmptyMediaAsset("photo");
    syncRuntimePhotoState();
    photoProfileReadySelection = "video-request";
  }
  resetDraftVideoAsset();
  syncRuntimeVideoState();
  state.selectedDesignStyle = null;
  setDesignMediaMode("video");
  syncDesignVideo();
  if (shouldReturnFromPhotoProfile) {
    closePhotoProfileScreen();
    isRecorderOpenedFromPhotoProfile = false;
  }
  closeRecorder();
}

function clearEcardVideo() {
  if (!state.ecardMedia.video.url && !state.hasEcardVideo && state.ecardVideoStatus === "empty") return;
  stopDesignPreview(false);
  state.ecardMedia.video = clearAsset(state.ecardMedia.video);
  syncRuntimeVideoState();
  setVideoElementSource(designVideoPreview, "");
  setVideoElementSource(previewVideoPlayer, "");
  setDesignTextMode(false, false);
  syncDesignVideo();
}

async function openPhotoCamera() {
  hidePhotoPicker();
  hideDesignExit();
  draftPhotoSource = "camera";
  clearDraftPhotoAsset();
  resetPhotoCameraView();
  photoCameraScreen.hidden = false;
  requestAnimationFrame(() => photoCameraScreen.classList.add("is-visible"));
  try {
    await openPhotoStream();
  } catch (error) {
    showPhotoCameraError(error);
  }
}

function openPhotoGallery() {
  hidePhotoPicker();
  hideDesignExit();
  draftPhotoSource = "gallery";
  clearDraftPhotoAsset();
  pickPhotoFromGallery();
}

function closePhotoCameraScreen() {
  stopPhotoStream();
  detachPhotoCameraPreview();
  photoCameraScreen.classList.remove("is-visible");
  window.setTimeout(() => {
    if (!photoCameraScreen.classList.contains("is-visible")) {
      photoCameraScreen.hidden = true;
    }
  }, ANIMATION_MS);
}

function closePhotoGalleryScreen() {
  if (photoGalleryPointer) {
    stopPhotoGalleryPointer({ pointerId: photoGalleryPointer.id });
  }
  photoGalleryScreen.classList.remove("is-visible");
  window.setTimeout(() => {
    if (!photoGalleryScreen.classList.contains("is-visible")) {
      closePhotoGalleryEditor();
      photoGalleryScreen.hidden = true;
    }
  }, ANIMATION_MS);
}

function syncPhotoProfileAssets() {
  const source = PHOTO_SOURCE_CONFIG[state.ecardPhotoSource] || PHOTO_SOURCE_CONFIG.camera;
  const photoUrl = getActivePhotoAssetUrl() || source.photoAsset;
  photoProfileScreen.style.setProperty("--photo-stage-asset", `url("${source.profileStageAsset}")`);
  photoProfileScreen.style.setProperty("--photo-card-asset", `url("${photoUrl}")`);
  photoProfileScreen.classList.toggle("is-gallery-source", state.ecardPhotoSource === "gallery");
}

function showPhotoProfileState(stateName) {
  syncPhotoProfileAssets();
  const hasReadyPhoto = stateName === "ready" && state.hasEcardPhoto;
  photoProfileScreen.classList.toggle("is-photo-request-mode", stateName === "ready" && photoProfileReadySelection === "photo-request");
  photoProfileProcessingState.hidden = stateName !== "processing";
  photoProfileSyncState.hidden = stateName !== "sync";
  photoProfileReadyState.hidden = stateName !== "ready";
  photoProfilePhotoRequestCard.hidden = true;
  photoProfileVideoRequestCard.hidden = true;
  photoProfileCard.hidden = stateName !== "ready";
  photoProfileDelete.hidden = !hasReadyPhoto;
  photoProfileReplace.hidden = !hasReadyPhoto;
  photoProfileCard.classList.remove("is-text-mode", "is-flipping");
  photoProfileScreen.classList.remove("is-text-mode");
  const viewportByState = {
    processing: photoTemplateScrollAreas[0].viewport,
    sync: photoTemplateScrollAreas[1].viewport,
    ready: photoTemplatesViewportReady
  };
  window.requestAnimationFrame(() => {
    if (stateName === "ready") {
      syncPhotoProfileReadySelection(true);
      return;
    }
    centerTemplateCard(viewportByState[stateName]?.querySelector(".template-photo-preview"), viewportByState[stateName]);
  });
}

function openPhotoProfileScreen() {
  window.clearTimeout(photoProfileTick);
  showPhotoProfileState("sync");
  photoProfileScreen.hidden = false;
  photoProfileScreen.classList.add("is-loading");
  requestAnimationFrame(() => photoProfileScreen.classList.add("is-visible"));
}

function openSavedPhotoProfileScreen() {
  window.clearTimeout(photoProfileTick);
  resetPhotoUploadTick();
  syncPhotoProfileAssets();
  syncPhotoTextFields();
  if (!photoProfileReadySelectedButton) {
    photoProfileReadySelection = "current-photo";
    photoProfileReadySelectedButton = photoReadyTemplate;
  }
  showPhotoProfileState("ready");
  photoProfileScreen.hidden = false;
  photoProfileScreen.classList.remove("is-loading");
  requestAnimationFrame(() => photoProfileScreen.classList.add("is-visible"));
}

function openPhotoRequestPicker() {
  if (photoProfileScreen.classList.contains("is-video-request-mode")) {
    openRecorder();
    return;
  }
  if (!photoProfileScreen.classList.contains("is-photo-request-mode")) return;
  isPhotoPickerOpenedFromProfileRequest = true;
  hidePhotoPicker();
  closePhotoGalleryScreen();
  closePhotoCameraScreen();
  clearDraftPhotoAsset();
  draftPhotoSource = null;
  showPhotoPicker();
}

function closePhotoProfileScreen() {
  window.clearTimeout(photoProfileTick);
  resetPhotoUploadTick();
  setPhotoTextMode(false, false);
  photoProfileScreen.classList.remove("is-loading");
  photoProfileScreen.classList.remove("is-visible");
  window.setTimeout(() => {
    if (!photoProfileScreen.classList.contains("is-visible")) {
      photoProfileScreen.hidden = true;
    }
  }, ANIMATION_MS);
}

function clearEcardPhoto() {
  state.ecardMedia.photo = clearAsset(state.ecardMedia.photo);
  syncRuntimePhotoState();
  setPhotoTextMode(false, false);
  photoProfileReadySelection = "current-photo";
  photoProfileReadySelectedButton = photoReadyTemplate;
  syncDesignVideo();
}

function takeMockPhoto() {
  if (!activePhotoStream) return;
  const width = photoCameraPreview.videoWidth;
  const height = photoCameraPreview.videoHeight;
  if (!width || !height) return;
  photoCaptureCanvas.width = width;
  photoCaptureCanvas.height = height;
  const context = photoCaptureCanvas.getContext("2d");
  if (!context) return;
  context.save();
  context.scale(-1, 1);
  context.drawImage(photoCameraPreview, -width, 0, width, height);
  context.restore();
  photoCaptureCanvas.toBlob((blob) => {
    if (!blob) return;
    clearDraftPhotoAsset();
    currentDraftPhotoAsset = createDraftAsset("photo", blob, {
      mimeType: blob.type || "image/jpeg",
      source: "camera"
    });
    hasDraftPhoto = true;
    photoCameraCaptured.src = currentDraftPhotoAsset.url;
    photoCameraCaptured.hidden = false;
  }, "image/jpeg", 0.92);
  photoCameraFrame?.classList.add("is-shot");
  photoCameraOpenState.hidden = true;
  photoCameraShotState.hidden = false;
  photoCameraShutter.hidden = true;
  photoCameraRetake.hidden = false;
  photoCameraConfirm.hidden = false;
}

function retakeMockPhoto() {
  clearDraftPhotoAsset();
  draftPhotoSource = "camera";
  resetPhotoCameraView();
  photoCameraPreview.play().catch(() => {});
}

function cancelPhotoCamera() {
  clearDraftPhotoAsset();
  resetPhotoCameraView();
  closePhotoCameraScreen();
  showPhotoPicker();
}

function cancelPhotoGallerySelection() {
  clearDraftPhotoAsset();
  draftPhotoSource = null;
  closePhotoGalleryScreen();
  showPhotoPicker();
}

function deleteProfilePhoto() {
  if (!state.hasEcardPhoto) return;
  window.clearTimeout(photoProfileTick);
  resetPhotoUploadTick();
  clearEcardPhoto();
  closePhotoProfileScreen();
}

function replaceProfilePhoto() {
  if (!state.hasEcardPhoto) return;
  window.clearTimeout(photoProfileTick);
  resetPhotoUploadTick();
  setPhotoTextMode(false, false);
  hidePhotoPicker();
  closePhotoGalleryScreen();
  closePhotoCameraScreen();
  clearDraftPhotoAsset();
  draftPhotoSource = null;
  showPhotoPicker();
}

function openPhotoTextCard() {
  setPhotoTextMode(true);
}

function syncPhotoTextFields() {
  photoEcardMessage.value = state.photoEcardText;
  photoEcardSignature.value = state.photoEcardSignature;
}

function getPreviewVariant() {
  if (state.selectedDesignStyle) return "style";
  if (state.designMediaMode === "photo" && state.hasEcardPhoto) return "photo";
  return "video";
}

function getPreviewTextPayload(variant) {
  if (variant === "photo") {
    return {
      message: state.photoEcardText,
      signature: state.photoEcardSignature
    };
  }

  return {
    message: state.ecardText,
    signature: state.ecardSignature
  };
}

function syncPreviewContent() {
  const variant = getPreviewVariant();
  const text = getPreviewTextPayload(variant);
  const photoSource = PHOTO_SOURCE_CONFIG[state.ecardPhotoSource] || PHOTO_SOURCE_CONFIG.camera;
  const videoUrl = state.ecardMedia.video.url;
  const photoUrl = getActivePhotoAssetUrl() || photoSource.photoAsset;
  state.previewVariant = variant;
  previewCardShell.classList.toggle("is-back-side", state.isPreviewBack);
  previewFrontVideo.hidden = variant !== "video";
  previewFrontPhoto.hidden = variant !== "photo";
  previewFrontStyle.hidden = variant !== "style";
  resetPreviewPlaybackProgress();
  previewMediaCircle.classList.toggle("is-video", variant === "video");
  previewMediaCircle.classList.toggle("has-video", variant === "video" && Boolean(videoUrl));
  previewMediaCircle.style.setProperty("--preview-media-asset", "none");
  setVideoElementSource(previewVideoPlayer, variant === "video" ? videoUrl : "", false, state.ecardMedia.video);
  previewPlay.hidden = !(variant === "video" && videoUrl);
  previewScreen.style.setProperty("--preview-card-bg", state.designColor);
  previewScreen.style.setProperty("--preview-photo-asset", `url("${photoUrl}")`);
  if (variant === "style") {
    previewStyleCard.dataset.style = state.selectedDesignStyle || "abstract";
  } else {
    delete previewStyleCard.dataset.style;
  }
  previewTextMessage.textContent = text.message || " ";
  previewTextSignature.textContent = text.signature || "";
}

function openPreviewScreen(source = "design") {
  state.previewSource = source;
  state.isPreviewOpen = true;
  syncPreviewContent();
  previewScreen.hidden = false;
  requestAnimationFrame(() => {
    previewScreen.classList.add("is-visible");
    playPreviewButterflies();
  });
}

function closePreviewScreen(animate = true) {
  state.isPreviewOpen = false;
  stopPreviewButterflies();
  previewVideoPlayer.pause();
  resetPreviewPlaybackProgress();
  if (!animate) {
    previewScreen.classList.remove("is-visible");
    previewScreen.hidden = true;
    return;
  }
  previewScreen.classList.remove("is-visible");
  window.setTimeout(() => {
    if (!previewScreen.classList.contains("is-visible")) {
      previewScreen.hidden = true;
    }
  }, ANIMATION_MS);
}

function togglePreviewCardSide() {
  state.isPreviewBack = !state.isPreviewBack;
  syncPreviewContent();
}

function confirmPreviewSelection() {
  state.hasEcard = true;
  state.card = "ecard";
  state.quantities.ecard = 1;
  state.isPreviewOpen = false;
  closePreviewScreen(false);
  closeDesign();
  render();
}

function setPhotoTextMode(showText, animate = true) {
  if (photoProfileCard.classList.contains("is-flipping")) return;
  if (photoProfileCard.classList.contains("is-text-mode") === showText) {
    if (showText) syncPhotoTextFields();
    return;
  }

  const applyMode = () => {
    photoProfileCard.hidden = false;
    photoProfileCard.classList.toggle("is-text-mode", showText);
    photoProfileScreen.classList.toggle("is-text-mode", showText);
    if (showText) {
      syncPhotoTextFields();
      photoEcardMessage.focus();
    }
  };

  if (!animate) {
    applyMode();
    return;
  }

  photoProfileCard.classList.add("is-flipping");
  window.setTimeout(applyMode, ANIMATION_MS);
  window.setTimeout(() => {
    photoProfileCard.classList.remove("is-flipping");
  }, ANIMATION_MS * 2);
}

function confirmMockPhoto() {
  if (!hasDraftPhoto) return;
  showPhotoAssetFlow("camera");
  resetDraftPhotoAsset();
}

function confirmGalleryPhoto() {
  if (!hasDraftPhoto || draftPhotoSource !== "gallery") return;
  createCroppedPhotoAsset();
  showPhotoAssetFlow("gallery");
  resetDraftPhotoAsset();
}

function setDesignMediaMode(mode) {
  state.designMediaMode = mode;
  syncDesignVideo();
  if (state.isPreviewOpen) syncPreviewContent();
  centerTemplateCard(mode === "photo" ? templatePhoto : templateVideo);
}

function showPhotoPicker() {
  hideDesignExit();
  overlay.hidden = false;
  overlay.classList.add("is-photo-picker");
  photoPickerSheet.hidden = false;
  requestAnimationFrame(() => {
    overlay.classList.add("is-visible");
    photoPickerSheet.classList.add("is-visible");
  });
}

function hidePhotoPicker() {
  overlay.classList.remove("is-visible");
  photoPickerSheet.classList.remove("is-visible");
  window.setTimeout(() => {
    if (!photoPickerSheet.classList.contains("is-visible")) {
      overlay.classList.remove("is-photo-picker");
      if (!introSheet.classList.contains("is-visible")) {
        overlay.hidden = true;
      }
      photoPickerSheet.hidden = true;
    }
  }, ANIMATION_MS);
}

function cancelPhotoPicker() {
  hidePhotoPicker();
  if (isPhotoPickerOpenedFromProfileRequest) {
    isPhotoPickerOpenedFromProfileRequest = false;
    photoProfileReadySelection = "photo-request";
    openSavedPhotoProfileScreen();
    return;
  }
  setDesignMediaMode("photo");
}

function syncDesignVideo() {
  const hasVideo = state.hasEcardVideo;
  const hasPhoto = state.hasEcardPhoto;
  const hasStyle = Boolean(state.selectedDesignStyle);
  const photoSource = PHOTO_SOURCE_CONFIG[state.ecardPhotoSource] || PHOTO_SOURCE_CONFIG.camera;
  const photoUrl = getActivePhotoAssetUrl() || photoSource.photoAsset;
  const mediaCircle = document.querySelector(".media-circle");
  const isReady = state.ecardVideoStatus === "ready";
  const isPhotoMode = state.designMediaMode === "photo";
  const videoUrl = state.ecardMedia.video.url;
  designCard.style.setProperty("--design-photo-stage-asset", `url("${photoUrl}")`);
  photoTemplateCards.forEach((card) => {
    card.style.setProperty("--photo-card-asset", `url("${photoUrl}")`);
  });
  designCard.classList.toggle("is-photo-layout", isPhotoMode && !hasStyle && !state.isDesignTextMode);
  mediaCircle.classList.toggle("has-video", hasVideo);
  mediaCircle.classList.toggle("has-photo", hasPhoto && isPhotoMode);
  mediaCircle.classList.toggle("is-loading", false);
  mediaCircle.classList.toggle("is-ready", isReady);
  mediaCircle.classList.toggle("is-photo-mode", isPhotoMode);
  stopDesignPreview(false);
  setVideoElementSource(designVideoPreview, hasVideo ? videoUrl : "", false, state.ecardMedia.video);
  setVideoElementSource(templateVideoPreview, hasVideo ? videoUrl : "", true, state.ecardMedia.video);
  templateVideo.classList.toggle("has-video", hasVideo);
  templateVideo.classList.toggle("is-loading", false);
  templateVideo.classList.toggle("is-retry", false);
  templateVideo.classList.toggle("is-ready", isReady);
  templateVideo.classList.toggle("is-selected", !isPhotoMode && !hasStyle);
  templatePhoto.classList.toggle("is-selected", isPhotoMode && !hasStyle);
  recordNewTemplate.hidden = !hasVideo;
  designPlay.hidden = !isReady;
  designTools.hidden = !isReady && !hasStyle;
  designPreviewButton.disabled = isPhotoMode ? !hasPhoto && !hasStyle : !isReady && !hasStyle;
  templateRemove.hidden = true;
  mediaCircle.setAttribute("aria-label", isPhotoMode ? "Добавить фото" : "Записать видеокружок");
  mediaCircle.querySelector(".media-label").textContent = isPhotoMode ? "Добавить фото" : "Записать видеокружок";
  if (false && isPhotoMode && hasPhoto) {
    mediaCircle.setAttribute("aria-label", "Фото добавлено");
    mediaCircle.querySelector(".media-label").textContent = "Фото добавлено";
  }
  if (state.isPreviewOpen) syncPreviewContent();
}

function syncDesignColor() {
  document.documentElement.style.setProperty("--design-bg-color", state.designColor);
  designCard.style.setProperty("--design-bg-color", state.designColor);
  designColorButtons.forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.color === state.designColor);
  });
  if (state.isPreviewOpen) syncPreviewContent();
}

function syncDesignStyle() {
  const hasStyle = Boolean(state.selectedDesignStyle);
  designCard.classList.toggle("has-style-preview", hasStyle);
  designStylePreview.hidden = !hasStyle;
  designStylePreview.disabled = !hasStyle;
  if (hasStyle) {
    designStylePreview.dataset.style = state.selectedDesignStyle;
    if (state.isPreviewOpen) syncPreviewContent();
    return;
  }
  delete designStylePreview.dataset.style;
  if (state.isPreviewOpen) syncPreviewContent();
}

function syncEcardTextFields() {
  ecardMessage.value = state.ecardText;
  ecardSignature.value = state.ecardSignature;
  designCard.classList.toggle("is-text-mode", state.isDesignTextMode);
  if (state.isPreviewOpen) syncPreviewContent();
}

function setDesignTextMode(showText, animate = true) {
  if (state.isDesignTextMode === showText || designCard.classList.contains("is-flipping")) return;
  stopDesignPreview();

  const applyMode = () => {
    state.isDesignTextMode = showText;
    designCard.classList.toggle("is-text-mode", showText);
    if (showText) {
      syncEcardTextFields();
      ecardMessage.focus();
    }
  };

  if (!animate) {
    applyMode();
    return;
  }

  designCard.classList.add("is-flipping");
  window.setTimeout(applyMode, ANIMATION_MS);
  window.setTimeout(() => {
    designCard.classList.remove("is-flipping");
  }, ANIMATION_MS * 2);
}

function toggleDesignPreview() {
  if (state.selectedDesignStyle) return;
  if (!state.hasEcardVideo || state.ecardVideoStatus !== "ready") return;
  const mediaCircle = document.querySelector(".media-circle");
  if (mediaCircle.classList.contains("is-playing")) {
    stopDesignPreview();
    return;
  }
  startDesignPreview();
}

function openRecorderOrPreview() {
  if (state.selectedDesignStyle) return;
  if (state.designMediaMode === "photo") {
    if (state.hasEcardPhoto) {
      openSavedPhotoProfileScreen();
      return;
    }
    showPhotoPicker();
    return;
  }
  if (state.ecardVideoStatus === "ready") {
    toggleDesignPreview();
    return;
  }
  openRecorder();
}

document.querySelector("#openEcard").addEventListener("click", openSheet);
document.querySelector("#later").addEventListener("click", closeSheet);
overlay.addEventListener("click", () => {
  if (photoPickerSheet.classList.contains("is-visible")) {
    cancelPhotoPicker();
    return;
  }
  closeSheet();
});

document.querySelector("#addEcard").addEventListener("click", () => {
  state.hasEcard = true;
  state.card = "ecard";
  state.quantities.ecard = Math.max(1, state.quantities.ecard);
  closeSheet();
  render();
});

document.querySelector("#backToCart").addEventListener("click", closeEditor);
document.querySelector("#closeEditor").addEventListener("click", closeEditor);
document.querySelector("#closeDesign").addEventListener("click", showDesignExit);
document.querySelector("#stayDesign").addEventListener("click", hideDesignExit);
document.querySelector("#stayDesignButton").addEventListener("click", keepEcardAndCloseDesign);
document.querySelector("#exitDesign").addEventListener("click", discardEcardAndCloseDesign);
document.querySelector("#openRecorder").addEventListener("click", openRecorderOrPreview);
templateVideo.addEventListener("click", () => {
  state.selectedDesignStyle = null;
  syncDesignStyle();
  setDesignMediaMode("video");
});
templatePhoto.addEventListener("click", () => {
  state.selectedDesignStyle = null;
  syncDesignStyle();
  setDesignMediaMode("photo");
  if (state.hasEcardPhoto) {
    openSavedPhotoProfileScreen();
  }
});
recordNewTemplate.addEventListener("click", openRecorder);
pickFromGallery.addEventListener("click", openPhotoGallery);
takePhoto.addEventListener("click", openPhotoCamera);
closePhotoPicker.addEventListener("click", cancelPhotoPicker);
cancelPhotoGallery.addEventListener("click", cancelPhotoGallerySelection);
confirmPhotoGallery.addEventListener("click", confirmGalleryPhoto);
photoGalleryCropWindow.addEventListener("pointerdown", (event) => {
  if (event.target !== photoGalleryCropWindow) return;
  startPhotoGalleryPointer(event, "move");
});
[
  ["#photoGalleryHandleTopLeft", "top-left"],
  ["#photoGalleryHandleTopRight", "top-right"],
  ["#photoGalleryHandleBottomLeft", "bottom-left"],
  ["#photoGalleryHandleBottomRight", "bottom-right"]
].forEach(([selector, mode]) => {
  document.querySelector(selector).addEventListener("pointerdown", (event) => {
    startPhotoGalleryPointer(event, mode);
  });
});
closePhotoCamera.addEventListener("click", cancelPhotoCamera);
photoCameraShutter.addEventListener("click", takeMockPhoto);
photoCameraRetake.addEventListener("click", retakeMockPhoto);
photoCameraConfirm.addEventListener("click", confirmMockPhoto);
photoFileInput.addEventListener("change", () => {
  const [file] = photoFileInput.files || [];
  if (file) {
    handlePhotoFileSelection(file);
  } else {
    cancelPhotoGallerySelection();
  }
  photoFileInput.value = "";
});
photoProfileText.addEventListener("click", openPhotoTextCard);
photoProfileDelete.addEventListener("click", deleteProfilePhoto);
photoProfileReplace.addEventListener("click", replaceProfilePhoto);
closePhotoProfileScreenButton.addEventListener("click", closePhotoProfileScreen);
photoProfilePreviewButton.addEventListener("click", () => openPreviewScreen("photo"));
photoProfilePhotoRequestTrigger.addEventListener("click", openPhotoRequestPicker);
photoProfileVideoRequestTrigger.addEventListener("click", openRecorderFromPhotoProfile);
flipPhotoCardBack.addEventListener("click", () => setPhotoTextMode(false));
photoEcardMessage.addEventListener("input", () => {
  state.photoEcardText = photoEcardMessage.value;
  if (state.isPreviewOpen) syncPreviewContent();
});
photoEcardSignature.addEventListener("input", () => {
  state.photoEcardSignature = photoEcardSignature.value;
  if (state.isPreviewOpen) syncPreviewContent();
});
designColorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.designColor = button.dataset.color;
    syncDesignColor();
  });
});
openDesignText.addEventListener("click", () => setDesignTextMode(true));
designStylePreviewText.addEventListener("click", () => setDesignTextMode(true));
flipDesignBack.addEventListener("click", () => setDesignTextMode(false));
ecardMessage.addEventListener("input", () => {
  state.ecardText = ecardMessage.value;
  if (state.isPreviewOpen) syncPreviewContent();
});
ecardSignature.addEventListener("input", () => {
  state.ecardSignature = ecardSignature.value;
  if (state.isPreviewOpen) syncPreviewContent();
});
designPreviewButton.addEventListener("click", () => openPreviewScreen("design"));
closePreviewButton.addEventListener("click", () => closePreviewScreen());
closePreviewBackButton.addEventListener("click", () => closePreviewScreen());
previewFlipTrigger.addEventListener("click", togglePreviewCardSide);
previewSubmitButton.addEventListener("click", confirmPreviewSelection);
previewMediaCircle.addEventListener("click", togglePreviewVideoPlayback);
previewPlay.addEventListener("click", (event) => {
  event.stopPropagation();
  togglePreviewVideoPlayback();
});
document.querySelector("#closeRecorder").addEventListener("click", closeRecorder);
recordMain.addEventListener("click", () => {
  if (recorderMode === "recording") {
    stopRecording();
  } else if (recorderMode === "recorded") {
    confirmRecording();
  } else {
    startRecording();
  }
});
recordPlay.addEventListener("click", () => {
  startRecordPreview();
});
deleteRecording.addEventListener("click", deleteDraftRecording);
flipCamera.addEventListener("click", switchCamera);
templateRemove.addEventListener("click", (event) => {
  event.stopPropagation();
  clearEcardVideo();
});
[
  [holdTemplatesLeft, -1],
  [holdTemplatesRight, 1]
].forEach(([button, direction]) => {
  button.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    startTemplateHoldScroll(designTemplatesViewport, direction);
  });
  button.addEventListener("pointerup", stopTemplateHoldScroll);
  button.addEventListener("pointerleave", stopTemplateHoldScroll);
  button.addEventListener("pointercancel", stopTemplateHoldScroll);
});
photoTemplateScrollAreas.forEach(({ viewport, left, right }) => {
  [
    [left, -1],
    [right, 1]
  ].forEach(([button, direction]) => {
    button.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      startTemplateHoldScroll(viewport, direction);
    });
    button.addEventListener("pointerup", stopTemplateHoldScroll);
    button.addEventListener("pointerleave", stopTemplateHoldScroll);
    button.addEventListener("pointercancel", stopTemplateHoldScroll);
  });
});
window.addEventListener("pointerup", stopTemplateHoldScroll);
window.addEventListener("pointermove", updatePhotoGalleryPointer);
window.addEventListener("pointerup", stopPhotoGalleryPointer);
window.addEventListener("pointercancel", stopPhotoGalleryPointer);
designVideoPreview.addEventListener("loadedmetadata", syncDesignPreviewProgress);
designVideoPreview.addEventListener("seeking", syncDesignPreviewProgress);
designVideoPreview.addEventListener("play", () => {
  document.querySelector(".media-circle").classList.add("is-playing");
  syncDesignPreviewProgress();
  clearDesignPreviewTimer();
  designPreviewTick = window.requestAnimationFrame(tickDesignPreviewProgress);
});
designVideoPreview.addEventListener("pause", () => {
  clearDesignPreviewTimer();
  if (!designVideoPreview.ended) {
    document.querySelector(".media-circle").classList.remove("is-playing");
  }
});
designVideoPreview.addEventListener("ended", () => stopDesignPreview(false));
recordPreviewVideo.addEventListener("ended", () => stopRecordPreview());
previewVideoPlayer.addEventListener("loadedmetadata", syncPreviewPlaybackProgress);
previewVideoPlayer.addEventListener("seeking", syncPreviewPlaybackProgress);
previewVideoPlayer.addEventListener("play", () => {
  previewMediaCircle.classList.add("is-playing");
  syncPreviewPlaybackProgress();
  clearPreviewPlaybackTimer();
  previewPlaybackTick = window.requestAnimationFrame(tickPreviewPlaybackProgress);
});
previewVideoPlayer.addEventListener("pause", () => {
  clearPreviewPlaybackTimer();
  previewMediaCircle.classList.remove("is-playing");
});
previewVideoPlayer.addEventListener("ended", () => {
  clearPreviewPlaybackTimer();
  previewMediaCircle.classList.remove("is-playing");
  setPreviewPlaybackProgress(1);
  previewPlay.hidden = false;
});
window.addEventListener("beforeunload", () => {
  stopStream(activeMediaStream);
  stopPhotoStream();
  state.ecardMedia.video = clearAsset(state.ecardMedia.video);
  state.ecardMedia.photo = clearAsset(state.ecardMedia.photo);
  currentDraftVideoAsset = clearAsset(currentDraftVideoAsset);
  currentDraftPhotoAsset = clearAsset(currentDraftPhotoAsset);
});
saveText.addEventListener("click", () => {
  if (cardText.value.length > CARD_TEXT_LIMIT) return;
  state.hasPrintedCard = true;
  state.card = "printed";
  state.text = cardText.value.trim();
  state.quantities.printedCard = Math.max(1, state.quantities.printedCard);
  closeEditor();
});

document.querySelectorAll('.editor-actions [data-delta]').forEach((button) => {
  button.addEventListener("click", () => changeQuantity("printedCard", Number(button.dataset.delta)));
});

cardText.addEventListener("input", updateCount);
clearText.addEventListener("click", () => {
  cardText.value = "";
  updateCount();
  cardText.focus();
});

document.querySelectorAll(".design-templates-track").forEach(populateTemplateTrack);
[
  designTemplatesViewport,
  ...photoTemplateScrollAreas.map(({ viewport }) => viewport)
].forEach(initializeTemplateViewport);
syncDesignStyle();
centerTemplateCard(templateVideo, designTemplatesViewport);
syncPreviewContent();

render();
syncPhotoCameraLayoutAssets();
