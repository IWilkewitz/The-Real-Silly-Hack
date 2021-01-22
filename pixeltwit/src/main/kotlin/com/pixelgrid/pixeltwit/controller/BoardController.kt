package kotlin.com.pixelgrid.pixeltwit.controller

import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.PostMapping
import kotlin.com.pixelgrid.pixeltwit.model.Board
import com.pixelgrid.pixeltwit.business.BoardBusinessService

@RestContorller
class BoardContoller{

    BoardBusinessService bService = new BoardBusinessService()
    
    @PostMapping("/consumeBoard")
    Board consumeBoard(@RequestBody Board newBoard){
        //Send that bitch to the business service :)
        if(bService.createImage(newBoard)){
            if(bService.tweetBoard()){
                return true;
            }
        }else{
            return false;
        }
    }
}