import { async, TestBed } from '@angular/core/testing';
import { BarraSuperiorComponent } from './barra-superior.component';
describe('BarraSuperiorComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BarraSuperiorComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BarraSuperiorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=barra-superior.component.spec.js.map