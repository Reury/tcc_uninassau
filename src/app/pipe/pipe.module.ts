import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupByPipe } from './groupBy/group-by.pipe';
import { PesquisarFilterPipe } from './pesquisa/pipe.pesquisa';



@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        GroupByPipe,
        PesquisarFilterPipe
    ],
    providers: [
        GroupByPipe,
        PesquisarFilterPipe
    ],
    exports: [
        GroupByPipe,
        PesquisarFilterPipe

    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class PipesModule { }
