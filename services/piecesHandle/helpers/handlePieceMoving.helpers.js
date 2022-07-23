import { chessConfig } from "../../../config/chessConfig.config.js";
import { $, $$$ } from "../../../utils/utils.js";
import { piecesRender } from "../../piecesRender.service.js";
import { playerTurn } from "../../../services/playerTurn.service.js";
import { piecesDetermine } from "../../piecesDetermine.service.js";

export default {
  handleMovingThePieceNetwork(
    pieceBoxElementIDStr,
    // pieceElement IS AN IMAGE TAG of Pc TO CUT. HAS no id
    pieceSelectedPositionIDStr
  ) {
    const pieceBoxElement = $(`#${pieceBoxElementIDStr}`);
    const pieceElement = $$$(pieceBoxElement, chessConfig.chessPieceSelector);

    if (pieceElement) {
      pieceElement.remove();
    }

    const pieceBoxElementSelected = $(`#${pieceSelectedPositionIDStr}`);
    const pieceElementSelected = $$$(
      pieceBoxElementSelected,
      chessConfig.chessPieceSelector
    );
    pieceBoxElement.append(pieceElementSelected);
    this.removePiecePotentials(this.pieceSelectedPositionIDStr);
    playerTurn.changeTurn();
    piecesDetermine.generateDeterminations();
    piecesRender.resetPiecesBoxListeners();
    piecesRender.addPiecesBoxListeners();
    // Convert Str to element
    // Perform Selected Ops
    // addPiecesBoxListeners
  },
  handleMovingThePiece({ pieceBoxElement, pieceElement }) {
    console.log(pieceBoxElement);
    console.log(pieceElement);
    if (pieceElement) {
      pieceElement.remove();
    }
    // Removing the Image Tag (Destination Image Tag)

    // To Box
    const pieceBoxElementSelected = $(`#${this.pieceSelectedPosition}`);
    const pieceElementSelected = $$$(
      pieceBoxElementSelected,
      chessConfig.chessPieceSelector
    );
    pieceBoxElement.append(pieceElementSelected);

    this.removeReady(pieceBoxElementSelected);
    this.removeSelected(pieceBoxElementSelected);
    this.removePiecePotentials(this.pieceSelectedPosition);
    this.removeReady(pieceBoxElementSelected);
    this.resetPieceSelected();

    playerTurn.changeTurn();
    piecesDetermine.generateDeterminations();
    piecesRender.resetPiecesBoxListeners();
    piecesRender.addPiecesBoxListeners();
  },
};

// For Console Debugging
let handleMovingThePieceNetwork = function (
  pieceBoxElementIDStr,
  // pieceElement IS AN IMAGE TAG of Pc TO CUT. HAS no id
  pieceSelectedPositionIDStr
) {
  const pieceBoxElement = $(`#${pieceBoxElementIDStr}`);
  const pieceElement = $$$(pieceBoxElement, chessConfig.chessPieceSelector);

  if (pieceElement) {
    pieceElement.remove();
  }

  const pieceBoxElementSelected = $(`#${pieceSelectedPositionIDStr}`);
  const pieceElementSelected = $$$(
    pieceBoxElementSelected,
    chessConfig.chessPieceSelector
  );
  pieceBoxElement.append(pieceElementSelected);
  // this.removePiecePotentials(this.pieceSelectedPositionIDStr);
  playerTurn.changeTurn();
  piecesDetermine.generateDeterminations();
  piecesRender.resetPiecesBoxListeners();
  piecesRender.addPiecesBoxListeners();
  // Convert Str to element
  // Perform Selected Ops
  // addPiecesBoxListeners
};
