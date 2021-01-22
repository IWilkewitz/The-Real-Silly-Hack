package kotlin.com.pixelgrid.pixeltwit.model

import javax.persistence.Entity
import kotlin.com.pixelgrid.pixeltwit.model.Cell

@Entity
class Board(
    private var Xwidth: Long = 0,
    private var Yheight: Long = 0,
    private var cells: Array<Cell> = 0
)