/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "VCF Validator", "index.html", [
    [ "Contributing to vcf-validator", "d6/dcd/md__c_o_n_t_r_i_b_u_t_i_n_g.html", [
      [ "Bug reports & troubleshooting", "d6/dcd/md__c_o_n_t_r_i_b_u_t_i_n_g.html#autotoc_md0", null ],
      [ "First Timers Welcome!", "d6/dcd/md__c_o_n_t_r_i_b_u_t_i_n_g.html#autotoc_md1", null ],
      [ "Making a New PR", "d6/dcd/md__c_o_n_t_r_i_b_u_t_i_n_g.html#autotoc_md2", null ],
      [ "Coding Practice", "d6/dcd/md__c_o_n_t_r_i_b_u_t_i_n_g.html#autotoc_md3", null ]
    ] ],
    [ "Developer guide", "db/dec/md_docs_2developer-guide.html", [
      [ "Build process overview", "db/dec/md_docs_2developer-guide.html#autotoc_md5", [
        [ "Deploying", "db/dec/md_docs_2developer-guide.html#autotoc_md6", null ]
      ] ],
      [ "Compilation architecture", "db/dec/md_docs_2developer-guide.html#autotoc_md7", null ],
      [ "Code structure", "db/dec/md_docs_2developer-guide.html#autotoc_md8", null ],
      [ "Features' location", "db/dec/md_docs_2developer-guide.html#autotoc_md9", [
        [ "VCF Validator features", "db/dec/md_docs_2developer-guide.html#autotoc_md10", [
          [ "Compression", "db/dec/md_docs_2developer-guide.html#autotoc_md11", null ],
          [ "Syntax checks - Ragel", "db/dec/md_docs_2developer-guide.html#autotoc_md12", null ],
          [ "VCF parsing, policies and file structure", "db/dec/md_docs_2developer-guide.html#autotoc_md13", null ],
          [ "Semantic checks", "db/dec/md_docs_2developer-guide.html#autotoc_md14", null ],
          [ "Reporting", "db/dec/md_docs_2developer-guide.html#autotoc_md15", null ]
        ] ],
        [ "VCF assembly checker", "db/dec/md_docs_2developer-guide.html#autotoc_md16", null ],
        [ "VCF Debugulator", "db/dec/md_docs_2developer-guide.html#autotoc_md17", null ]
      ] ],
      [ "Testing", "db/dec/md_docs_2developer-guide.html#autotoc_md18", null ]
    ] ],
    [ "roadmap", "d4/d5b/md_docs_2roadmap.html", null ],
    [ "user-landpage", "db/daa/md_docs_2user-landpage.html", null ],
    [ "vcf-validator | <a href=\"https://github.com/EBIvariation/vcf-validator/actions/workflows/build.yml/badge.svg?branch=master\" ><img src=\"https://github.com/EBIvariation/vcf-validator/actions/workflows/build.yml/badge.svg?branch=master\" alt=\"Build Status\"/></a> <a href=\"https://ci.appveyor.com/project/ebivariation-bot/vcf-validator/branch/master\" ><img src=\"https://ci.appveyor.com/api/projects/status/vt4ldlwhm91e3n49/branch/master?svg=true\" alt=\"Build status\"/></a>", "d3/dcc/md__r_e_a_d_m_e.html", [
      [ "Installation", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md23", [
        [ "From Binaries", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md24", null ],
        [ "From conda", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md25", null ]
      ] ],
      [ "Run", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md26", [
        [ "Validator", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md27", null ],
        [ "Debugulator", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md28", null ],
        [ "Assembly Checker", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md29", null ],
        [ "Examples", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md30", null ]
      ] ],
      [ "Build", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md31", [
        [ "Linux", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md32", [
          [ "Dependencies", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md33", [
            [ "SQLite, CMake and automatic installation", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md34", null ],
            [ "Boost", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md35", null ],
            [ "ODB", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md36", null ]
          ] ],
          [ "Compile", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md37", null ]
        ] ],
        [ "macOS", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md38", [
          [ "Dependencies", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md39", [
            [ "SQLite, CMake and automatic installation", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md40", null ]
          ] ],
          [ "Compile", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md41", null ]
        ] ],
        [ "Windows", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md42", [
          [ "Dependencies", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md43", [
            [ "Compression libraries", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md44", null ],
            [ "Boost", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md45", null ],
            [ "ODB", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md46", null ]
          ] ],
          [ "Compile", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md47", null ]
        ] ]
      ] ],
      [ "Deliverables", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md48", null ],
      [ "Tests", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md49", null ],
      [ "Generate code from descriptors", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md50", null ],
      [ "Miscellaneous", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md51", [
        [ "Build ODB Libraries for windows", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md52", [
          [ "Build ODB runtime", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md53", null ],
          [ "Build SQLite for odb-sqlite", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md54", null ],
          [ "Build ODB-SQLite runtime", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md55", null ]
        ] ]
      ] ]
    ] ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ]
      ] ]
    ] ],
    [ "Data Structures", "annotated.html", [
      [ "Data Structures", "annotated.html", "annotated_dup" ],
      [ "Data Structure Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Data Fields", "functions.html", [
        [ "All", "functions.html", null ],
        [ "Functions", "functions_func.html", null ],
        [ "Variables", "functions_vars.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"d5/d23/record_8cpp_source.html",
"da/de2/structsqlite3__mutex__methods.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';