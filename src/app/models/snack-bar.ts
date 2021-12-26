import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";

export enum HorizontalPosition {
    Center = "center",
    Start = "start",
    End = "end",
    Left = "left",
    Right = "right"
}
export enum VerticalPosition {
    Top = "top",
    Bottom = "bottom"
}

export enum snackBarClass {
    error = "error-snackbar",
    success = "sucess-snackbar",
}

export class SnackMsgBar {
    horizontalPosition: MatSnackBarHorizontalPosition = HorizontalPosition.Start;
    verticalPosition: MatSnackBarVerticalPosition = VerticalPosition.Bottom;

    constructor(private snackBar?: MatSnackBar) { }

    openSnackBar(msg, className, horizontalPosition?, verticalPosition?) {
        this.snackBar.open(msg, 'X', {
            horizontalPosition: horizontalPosition ?? this.horizontalPosition,
            verticalPosition: verticalPosition ?? this.verticalPosition,
            panelClass: className
        });
    }

}