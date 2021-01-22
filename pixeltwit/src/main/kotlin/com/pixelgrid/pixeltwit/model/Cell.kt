package kotlin.com.pixelgrid.pixeltwit.model

import javax.persistence.Entity

@Entity
class Cell(
    var Xcord: Long = 0,
    var Ycord: Long = 0,
    var HexColor: String = ""
)