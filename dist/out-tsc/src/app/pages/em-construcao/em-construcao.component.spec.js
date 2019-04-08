import { async, TestBed } from '@angular/core/testing';
import { EmConstrucaoComponent } from './em-construcao.component';
describe('EmConstrucaoComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EmConstrucaoComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EmConstrucaoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=em-construcao.component.spec.js.map