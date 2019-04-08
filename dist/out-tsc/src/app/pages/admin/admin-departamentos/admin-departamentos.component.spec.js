import { async, TestBed } from '@angular/core/testing';
import { AdminDepartamentosComponent } from './admin-departamentos.component';
describe('AdminDepartamentosComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AdminDepartamentosComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AdminDepartamentosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=admin-departamentos.component.spec.js.map