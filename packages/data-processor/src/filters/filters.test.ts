import {expect, it, test} from 'vitest'
import {GrupoLocalizacionDesc, PrerepartoBruto} from "../types/PrerepartoBruto.js";
import {filterPrereparto} from "./filters.js";

    const preRepartoEcommerceMock: Partial<PrerepartoBruto> = {
        grupoLocalizacionDesc: GrupoLocalizacionDesc.Ciclo1GrupoA2
    }
    
    it.each([
        {...preRepartoEcommerceMock, esEcommerce: 1, expected: true},
        {...preRepartoEcommerceMock, esEcommerce: 0, expected: false}
    ])

    ('test ecommerce=$esEcommerce', ({expected, ...mock}: any) => {
        expect(filterPrereparto(mock)).toBe(expected);
    });


    const preRepartoGrupoMock: Partial<PrerepartoBruto> = {
        esEcommerce: 1
    }

    it.each([
        // Correctos
        {...preRepartoGrupoMock, grupoLocalizacionDesc: 'CICLO 2 GRUPO A2', expected: true},
        {...preRepartoGrupoMock, grupoLocalizacionDesc: 'CICLO 1 GRUPO B', expected: true},
        {...preRepartoGrupoMock, grupoLocalizacionDesc: 'CICLO 1 GRUPO A2', expected: true},
        // Incorrectos
        {...preRepartoGrupoMock, grupoLocalizacionDesc: 'CICLO 1 GRUPO A1', expected: false},
        {...preRepartoGrupoMock, grupoLocalizacionDesc: 'CICLO 2 GRUPO A1', expected: false},
    ])

    ('test grupoLocalización=$grupoLocalizacionDesc', ({expected, ...mock}: any) => {
        expect(filterPrereparto(mock)).toBe(expected);
    });

